import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.doubleAll>, number[]>>;
type InputContract = Expect<Equal<Parameters<typeof subject.doubleAll>, [values: number[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.doubleAll>, false>>;


