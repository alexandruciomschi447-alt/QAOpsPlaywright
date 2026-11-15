import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.area>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.area>, [shape: subject.Shape]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.area>, false>>;


