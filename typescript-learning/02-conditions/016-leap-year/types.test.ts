import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.isLeapYear>, boolean>>;
type InputContract = Expect<Equal<Parameters<typeof subject.isLeapYear>, [year: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.isLeapYear>, false>>;


