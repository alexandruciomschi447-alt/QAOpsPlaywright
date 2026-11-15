import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.remainder>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.remainder>, [value: number, divisor: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.remainder>, false>>;


