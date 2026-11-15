import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.pair>, false>>;

const a = subject.pair(1, 'a');
type A = Expect<Equal<typeof a, [number, string]>>;
