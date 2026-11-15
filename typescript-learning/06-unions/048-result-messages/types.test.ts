import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.message>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.message>, [result: subject.Result]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.message>, false>>;


