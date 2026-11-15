import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.parseJson>, subject.ParseResult>>;
type InputContract = Expect<Equal<Parameters<typeof subject.parseJson>, [text: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.parseJson>, false>>;


