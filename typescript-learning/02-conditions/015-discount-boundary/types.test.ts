import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.discount>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.discount>, [total: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.discount>, false>>;


