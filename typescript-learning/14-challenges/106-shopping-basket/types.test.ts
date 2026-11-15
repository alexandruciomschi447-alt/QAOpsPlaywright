import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.basket>, subject.Summary>>;
type InputContract = Expect<Equal<Parameters<typeof subject.basket>, [lines: subject.Line[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.basket>, false>>;


