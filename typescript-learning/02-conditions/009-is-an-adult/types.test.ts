import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.isAdult>, boolean>>;
type InputContract = Expect<Equal<Parameters<typeof subject.isAdult>, [age: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.isAdult>, false>>;


