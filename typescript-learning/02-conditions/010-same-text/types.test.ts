import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.sameText>, boolean>>;
type InputContract = Expect<Equal<Parameters<typeof subject.sameText>, [left: string, right: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.sameText>, false>>;


