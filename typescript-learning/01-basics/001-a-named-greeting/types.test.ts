import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.greeting>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.greeting>, []>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.greeting>, false>>;


