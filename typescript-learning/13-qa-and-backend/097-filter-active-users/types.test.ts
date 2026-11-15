import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.activeUsers>, subject.User[]>>;
type InputContract = Expect<Equal<Parameters<typeof subject.activeUsers>, [users: subject.User[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.activeUsers>, false>>;


