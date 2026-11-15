import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.evens>, number[]>>;
type InputContract = Expect<Equal<Parameters<typeof subject.evens>, [values: number[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.evens>, false>>;


