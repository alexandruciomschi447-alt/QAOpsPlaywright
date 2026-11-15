import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.label>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.label>, [name: string, count: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.label>, false>>;


