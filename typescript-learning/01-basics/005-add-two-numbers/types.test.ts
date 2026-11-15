import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.add>, number>>;
type InputContract = Expect<Equal<Parameters<typeof subject.add>, [left: number, right: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.add>, false>>;


