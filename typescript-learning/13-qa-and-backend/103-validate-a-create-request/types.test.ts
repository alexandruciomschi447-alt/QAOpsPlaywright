import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.validateCreate>, subject.Validation>>;
type InputContract = Expect<Equal<Parameters<typeof subject.validateCreate>, [value: unknown]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.validateCreate>, false>>;


