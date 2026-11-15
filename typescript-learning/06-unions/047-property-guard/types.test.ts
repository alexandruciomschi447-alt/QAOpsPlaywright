import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type InputContract = Expect<Equal<Parameters<typeof subject.isUser>, [value: unknown]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.isUser>, false>>;

type Guard = Expect<Equal<typeof subject.isUser, (value: unknown) => value is subject.User>>;
