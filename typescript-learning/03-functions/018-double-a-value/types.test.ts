import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.double>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.double>, [value: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.double>, false>>;


