import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.withTax>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.withTax>, [price: number, rate?: number | undefined]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.withTax>, false>>;


