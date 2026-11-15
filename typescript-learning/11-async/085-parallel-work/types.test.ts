import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.parallel>, Promise<number[]>>>;
type InputContract = Expect<Equal<Parameters<typeof subject.parallel>, [tasks: Array<() => Promise<number>>]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.parallel>, false>>;


