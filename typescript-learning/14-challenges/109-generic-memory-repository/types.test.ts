import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
const r = new subject.MemoryRepository<{id:number;name:string}>();
const a = r.find(1);
type A = Expect<Equal<typeof a, {id:number;name:string} | undefined>>;
// @ts-expect-error missing name
r.save({id:1});
// @ts-expect-error id must be numeric
const b = new subject.MemoryRepository<{id:string}>();

