import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.isLearning>, boolean>>;
type InputContract = Expect<Equal<Parameters<typeof subject.isLearning>, []>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.isLearning>, false>>;


