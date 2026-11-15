import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.nameOrGuest>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.nameOrGuest>, [value: string | null]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.nameOrGuest>, false>>;


