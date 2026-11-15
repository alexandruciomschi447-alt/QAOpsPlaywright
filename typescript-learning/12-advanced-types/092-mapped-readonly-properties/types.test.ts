import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Frozen<{id:number;name?:string}>, {readonly id:number;readonly name?:string}>>;
declare const a: subject.Frozen<{id:number}>;
// @ts-expect-error readonly
a.id = 2;

