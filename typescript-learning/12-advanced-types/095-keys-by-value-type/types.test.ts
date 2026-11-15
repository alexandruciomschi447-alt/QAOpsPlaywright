import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.KeysMatching<{id:number;name:string;age:number}, number>, 'id' | 'age'>>;
type B = Expect<Equal<subject.KeysMatching<{name?:string;title:string}, string>, 'title'>>;
type C = Expect<Equal<subject.KeysMatching<{}, number>, never>>;
// @ts-expect-error name is not a numeric property
const rejected: subject.KeysMatching<{id:number;name:string}, number> = 'name';

