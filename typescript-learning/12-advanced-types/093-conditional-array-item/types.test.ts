import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Item<number[]>, number>>;
type B = Expect<Equal<subject.Item<readonly ['a','b']>, 'a' | 'b'>>;
type C = Expect<Equal<subject.Item<string>, string>>;
type D = Expect<Equal<subject.Item<never[]>, never>>;
// @ts-expect-error item is numeric
const rejected: subject.Item<number[]> = 'text';

