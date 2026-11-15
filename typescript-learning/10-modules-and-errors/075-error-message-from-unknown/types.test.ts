import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.errorMessage>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.errorMessage>, [error: unknown]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.errorMessage>, false>>;


