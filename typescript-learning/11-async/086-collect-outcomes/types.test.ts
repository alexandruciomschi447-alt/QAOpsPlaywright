import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.settle>, Promise<subject.Outcome[]>>>;
type InputContract = Expect<Equal<Parameters<typeof subject.settle>, [tasks: Array<() => Promise<number>>]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.settle>, false>>;


