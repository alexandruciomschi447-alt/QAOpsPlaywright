import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type InputContract = Expect<Equal<Parameters<typeof subject.isString>, [value: unknown]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.isString>, false>>;

const value: unknown = 'x';
if (subject.isString(value)) { const text: string = value; }
type Guard = Expect<Equal<typeof subject.isString, (value: unknown) => value is string>>;
