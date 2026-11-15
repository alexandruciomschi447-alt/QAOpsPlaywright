import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.canEnter>, boolean>>;
type InputContract = Expect<Equal<Parameters<typeof subject.canEnter>, [hasTicket: boolean, isBanned: boolean]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.canEnter>, false>>;


