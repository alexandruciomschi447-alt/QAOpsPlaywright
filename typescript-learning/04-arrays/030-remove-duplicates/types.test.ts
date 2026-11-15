import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.unique>, string[]>>;
type InputContract = Expect<Equal<Parameters<typeof subject.unique>, [values: string[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.unique>, false>>;


