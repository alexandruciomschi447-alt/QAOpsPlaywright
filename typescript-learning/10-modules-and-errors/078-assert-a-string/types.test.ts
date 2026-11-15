import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type InputContract = Expect<Equal<Parameters<typeof subject.assertString>, [value: unknown]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.assertString>, false>>;

let value: unknown = 'x';
subject.assertString(value);
type Narrowed = Expect<Equal<typeof value, string>>;
