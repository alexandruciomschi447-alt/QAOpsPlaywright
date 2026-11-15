import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.countPositive>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.countPositive>, [values: number[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.countPositive>, false>>;


