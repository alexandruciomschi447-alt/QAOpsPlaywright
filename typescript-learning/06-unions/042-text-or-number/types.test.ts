import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.asText>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.asText>, [value: string | number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.asText>, false>>;


