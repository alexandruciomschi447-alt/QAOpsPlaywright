import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.sign>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.sign>, [value: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.sign>, false>>;


