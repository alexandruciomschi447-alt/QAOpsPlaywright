import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Keys<{id: number; name: string}>, 'id' | 'name'>>;
type B = Expect<Equal<subject.Keys<{}>, never>>;
// @ts-expect-error unsupported key
const a: subject.Keys<{id:number}> = 'name';

