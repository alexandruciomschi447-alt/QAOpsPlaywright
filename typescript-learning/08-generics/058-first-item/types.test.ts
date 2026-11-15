import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.first>, false>>;

const a = subject.first([1,2]);
type A = Expect<Equal<typeof a, number | undefined>>;
const b = subject.first(['a']);
type B = Expect<Equal<typeof b, string | undefined>>;
