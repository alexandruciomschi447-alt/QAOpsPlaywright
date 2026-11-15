import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Unwrap<Promise<Promise<number>>>, number>>;
type B = Expect<Equal<subject.Unwrap<string>, string>>;
type C = Expect<Equal<subject.Unwrap<Promise<boolean>>, boolean>>;
type D = Expect<Equal<subject.Unwrap<Promise<string> | number>, string | number>>;
// @ts-expect-error unwrapped value is numeric
const rejected: subject.Unwrap<Promise<number>> = 'text';

