import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type InputContract = Expect<Equal<Parameters<typeof subject.validateResponse>, [value: unknown]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.validateResponse>, false>>;

type Guard = Expect<Equal<typeof subject.validateResponse, (value: unknown) => value is subject.Response>>;
