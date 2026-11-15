import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.chunk>, number[][]>>;
type InputContract = Expect<Equal<Parameters<typeof subject.chunk>, [values: number[], size: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.chunk>, false>>;


