import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.seconds>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.seconds>, [minutes: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.seconds>, false>>;


