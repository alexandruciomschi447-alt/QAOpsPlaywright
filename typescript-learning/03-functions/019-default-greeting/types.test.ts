import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.welcome>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.welcome>, [name?: string | undefined]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.welcome>, false>>;


