import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.startingScore>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.startingScore>, []>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.startingScore>, false>>;


