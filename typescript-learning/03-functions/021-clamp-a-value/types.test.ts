import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.clamp>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.clamp>, [value: number, minimum: number, maximum: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.clamp>, false>>;


