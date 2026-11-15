import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.appLabel>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.appLabel>, [name: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.appLabel>, false>>;


