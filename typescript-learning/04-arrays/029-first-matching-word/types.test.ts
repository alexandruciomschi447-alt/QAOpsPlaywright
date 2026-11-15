import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.firstLong>, string | undefined>>;
type InputContract = Expect<Equal<Parameters<typeof subject.firstLong>, [words: string[], minimum: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.firstLong>, false>>;


