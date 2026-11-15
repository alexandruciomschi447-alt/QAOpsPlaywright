import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.mapValues>, false>>;

const a = subject.mapValues([1], n => String(n));
type A = Expect<Equal<typeof a, string[]>>;
