import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.rename>, subject.User>>;
type InputContract = Expect<Equal<Parameters<typeof subject.rename>, [user: subject.User, name: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.rename>, false>>;


