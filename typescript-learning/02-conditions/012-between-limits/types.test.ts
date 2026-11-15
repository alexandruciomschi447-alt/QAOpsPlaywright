import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.inRange>, boolean>>;
type InputContract = Expect<Equal<Parameters<typeof subject.inRange>, [value: number, minimum: number, maximum: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.inRange>, false>>;


