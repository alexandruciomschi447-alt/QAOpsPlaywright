const fs = require('node:fs');
const path = require('node:path');
const {manifest,walk} = require('./check.cjs');
const project = path.resolve(__dirname,'..');
const failures=[];
function requireThat(test,message) { if(!test) failures.push(message); }
requireThat(manifest.length>=100,'At least 100 exercises are required');
requireThat(new Set(manifest.map(e=>e.id)).size===manifest.length,'Duplicate exercise IDs');
requireThat(new Set(manifest.map(e=>e.topic)).size===14,'Expected 14 topics');
const headings=['What you are practising','Your task','File to edit','Examples','Rules and edge cases','How to check','When it passes'];
for(const [i,e] of manifest.entries()) {
 requireThat(e.id===String(i+1).padStart(3,'0'),`Out-of-order ID: ${e.id}`);
 const dir=path.join(project,e.path);
 for(const name of ['README.md','exercise.ts','types.test.ts',...(e.runtime?['runtime.test.ts']:[])]) requireThat(fs.existsSync(path.join(dir,name)),`${e.id}: missing ${name}`);
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 for(const [j,title] of headings.entries()) requireThat(readme.includes(`## ${j+1}. ${title}`),`${e.id}: missing section ${title}`);
 requireThat(readme.includes(`npm run check -- ${e.id}`),`${e.id}: incorrect command`);
 const starter=fs.readFileSync(path.join(dir,'exercise.ts'),'utf8');
 requireThat(starter.includes('TODO'),`${e.id}: starter needs a TODO`);
 requireThat(!/@ts-(?:ignore|nocheck)/.test(starter),`${e.id}: starter suppresses type checking`);
 const types=fs.readFileSync(path.join(dir,'types.test.ts'),'utf8');
 requireThat(types.includes('Expect<Equal<'),`${e.id}: exact type assertion missing`);
 if(e.runtime) requireThat(fs.readFileSync(path.join(dir,'runtime.test.ts'),'utf8').includes("it("),`${e.id}: runtime assertions missing`);
}
for(const file of [path.join(project,'README.md'),...walk(__dirname).filter(f=>f.endsWith('.md')&&!f.includes(`${path.sep}.cache${path.sep}`))]) {
 const text=fs.readFileSync(file,'utf8');
 for(const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
   const target=match[1];
   if(/^(?:https?:|#)/.test(target)) continue;
   requireThat(fs.existsSync(path.resolve(path.dirname(file),target.split('#')[0])),`Broken link in ${path.relative(project,file)}: ${target}`);
 }
}
if(failures.length) { console.error(failures.map(f=>'FAIL | '+f).join('\n')); process.exitCode=1; }
else console.log(`PASS | curriculum structure, sequential IDs, README sections, local documentation links, starters, and checks for ${manifest.length} exercises / 14 topics.`);
