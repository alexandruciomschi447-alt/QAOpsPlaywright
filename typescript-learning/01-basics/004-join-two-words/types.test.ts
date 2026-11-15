import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.joinWords>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.joinWords>, [first: string, second: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.joinWords>, false>>;


