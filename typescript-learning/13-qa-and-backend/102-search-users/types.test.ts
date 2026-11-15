import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.searchUsers>, subject.User[]>>;
type InputContract = Expect<Equal<Parameters<typeof subject.searchUsers>, [users: subject.User[], query: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.searchUsers>, false>>;


