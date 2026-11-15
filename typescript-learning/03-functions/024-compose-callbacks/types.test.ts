import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.compose>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.compose>, [value: number, first: (value: number) => number, second: (value: number) => string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.compose>, false>>;


