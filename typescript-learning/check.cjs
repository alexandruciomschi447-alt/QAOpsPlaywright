const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { spawnSync } = require('node:child_process');
const project = path.resolve(__dirname, '..');
const here = __dirname;
const manifest = JSON.parse(fs.readFileSync(path.join(here, 'curriculum.json'), 'utf8'));
const cache = path.join(here, '.cache');
const progressFile = path.join(cache, 'progress.json');
const readProgress = () => fs.existsSync(progressFile) ? JSON.parse(fs.readFileSync(progressFile, 'utf8')) : {};
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(item => item.isDirectory() ? walk(path.join(dir,item.name)) : [path.join(dir,item.name)]).sort();
function fingerprint(e) {
  const hash = crypto.createHash('sha256');
  const files = [...walk(path.join(project,e.path)), ...walk(path.join(here,'checks')), path.join(here,'check.cjs'), path.join(here,'tsconfig.json'), path.join(here,'vitest.config.mjs'), path.join(here,'curriculum.json'), path.join(project,'package.json'), path.join(project,'package-lock.json')];
  for(const file of files) { hash.update(path.relative(project,file)); hash.update(fs.readFileSync(file)); }
  return hash.digest('hex');
}
function run(script, args, env = {}) {
  const result = spawnSync(process.execPath, [script, ...args], {cwd:project,encoding:'utf8',env:{...process.env,...env},maxBuffer:32*1024*1024});
  return {ok:result.status===0, output:(result.stdout||'')+(result.stderr||'')+(result.error?.message||'')};
}
function select(mode, value) {
  if(mode==='all') return manifest;
  if(mode==='topic') {
    if(!value) throw new Error('Supply a topic number, for example npm run check:topic -- 01');
    const id = value.padStart(2,'0');
    const selected = manifest.filter(e => e.topic === id);
    if(!selected.length) throw new Error(`Unknown topic: ${value}`);
    return selected;
  }
  if(!/^\d{1,3}$/.test(mode||'')) throw new Error('Supply an exercise ID, for example npm run check -- 001');
  const selected = manifest.filter(e => e.id === mode.padStart(3,'0'));
  if(!selected.length) throw new Error(`Unknown exercise: ${mode}`);
  return selected;
}
function main() {
 const [mode, value] = process.argv.slice(2);
 if(mode==='list') { for(const e of manifest) console.log(`${e.id} | ${e.topic} ${e.topicName} | ${e.name}`); return; }
 if(mode==='progress') {
   const saved=readProgress(); let passed=0, stale=0, failed=0;
   for(const e of manifest) {
     const record=saved[e.id]; let state='NOT CHECKED';
     if(record) { if(record.hash !== fingerprint(e)) {state=record.lastPass ? 'STALE — previously passed, check again' : 'CHANGED — check again'; if(record.lastPass) stale++;} else if(record.passed) {state='PASS';passed++;} else {state=record.lastPass ? 'FAIL — previously passed' : 'FAIL';failed++;} }
     console.log(`${state} | ${e.id} ${e.name}`);
   }
   console.log(`Summary: ${passed} current PASS, ${stale} previously passed and stale, ${failed} current FAIL, ${manifest.length} total.`); return;
 }
 const selected=select(mode,value);
 fs.mkdirSync(cache,{recursive:true});
 const results=new Map();
 for(const e of selected) {
   const config=path.join(cache, `tsconfig-${e.id}.json`);
   const files=walk(path.join(project,e.path)).filter(f => f.endsWith('.ts'));
   fs.writeFileSync(config,JSON.stringify({extends:'../tsconfig.json',files:files.map(f=>path.relative(cache,f).replaceAll('\\','/')),include:[],exclude:[]}));
   const result=run(path.join(project,'node_modules/typescript/bin/tsc'),['--project',config,'--pretty','false']);
   results.set(e.id,{types:result.ok,details:result.ok ? '' : result.output, runtime:!e.runtime});
 }
 const runtime=selected.filter(e=>e.runtime);
 if(runtime.length) {
   const reportFile=path.join(cache,'runtime-report.json');
   if(fs.existsSync(reportFile)) fs.unlinkSync(reportFile);
   const execution=run(path.join(project,'node_modules/vitest/vitest.mjs'),['run','--config','typescript-learning/vitest.config.mjs','--reporter=json',`--outputFile=${reportFile}`],{LEARNING_TEST_FILES:JSON.stringify(runtime.map(e=>`${e.path}/runtime.test.ts`))});
   const report=fs.existsSync(reportFile) ? JSON.parse(fs.readFileSync(reportFile,'utf8')) : null;
   for(const e of runtime) {
     const target=path.resolve(project,e.path,'runtime.test.ts').replaceAll('\\','/').toLowerCase();
     const test=report?.testResults?.find(t=>t.name.replaceAll('\\','/').toLowerCase()===target);
     const item=results.get(e.id);
     item.runtime = test?.status==='passed' && test.assertionResults?.length>0 && test.assertionResults.every(a => a.status==='passed') && !(report.success && !execution.ok);
     if(!item.runtime) {
       const failures=test?.assertionResults?.filter(a=>a.status==='failed').map(a=>`${a.fullName}\n${(a.failureMessages||[]).join('\n')}`).join('\n');
       item.details += '\nRuntime requirements:\n'+(failures || test?.message || execution.output || 'No runtime result was produced.');
     }
   }
 }
 const saved=readProgress(); let count=0;
 for(const e of selected) {
   const item=results.get(e.id); const passed=item.types && item.runtime;
   if(passed) count++;
   console.log(`${passed?'PASS':'FAIL'} | ${e.id} ${e.name} | types: ${item.types?'PASS':'FAIL'} | runtime: ${e.runtime ? item.runtime?'PASS':'FAIL':'not required'}`);
   if(!passed) console.log(item.details.trim());
   saved[e.id]={hash:fingerprint(e),passed,checkedAt:new Date().toISOString(),lastPass:passed ? new Date().toISOString() : saved[e.id]?.lastPass || null};
 }
 fs.writeFileSync(progressFile,JSON.stringify(saved,null,2)+'\n');
 console.log(`Summary: ${count} PASS, ${selected.length-count} FAIL, ${selected.length} checked. Unfinished starters are expected to FAIL.`);
 if(count!==selected.length) process.exitCode=1;
}
if(require.main===module) { try { main(); } catch(error) { console.error(`FAIL | checker: ${error.message}`); process.exitCode=1; } }
module.exports={fingerprint,manifest,walk};
