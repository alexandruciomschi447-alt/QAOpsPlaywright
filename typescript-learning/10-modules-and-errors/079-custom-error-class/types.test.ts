import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.validateName>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.validateName>, [value: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.validateName>, false>>;

declare const e: subject.ValidationError;
type Code = Expect<Equal<typeof e.code, 'INVALID_NAME'>>;
// @ts-expect-error code is readonly
e.code = 'INVALID_NAME';
