import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.area>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.area>, [width: number, height: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.area>, false>>;


