import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.countKeys>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.countKeys>, [value: Record<string, number>]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.countKeys>, false>>;


