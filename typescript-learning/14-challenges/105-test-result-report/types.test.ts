import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.report>, subject.Report>>;
type InputContract = Expect<Equal<Parameters<typeof subject.report>, [results: subject.TestResult[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.report>, false>>;


