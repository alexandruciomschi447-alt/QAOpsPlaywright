import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.textLength>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.textLength>, [value: unknown]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.textLength>, false>>;


