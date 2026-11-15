import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.hasContact>, boolean>>;
type InputContract = Expect<Equal<Parameters<typeof subject.hasContact>, [email: string, phone: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.hasContact>, false>>;


