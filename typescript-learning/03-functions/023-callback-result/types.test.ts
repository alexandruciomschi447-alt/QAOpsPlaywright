import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.apply>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.apply>, [value: number, transform: (value: number) => number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.apply>, false>>;


