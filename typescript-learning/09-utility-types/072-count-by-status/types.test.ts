import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.countStatuses>, Record<subject.Status, number>>>;
type InputContract = Expect<Equal<Parameters<typeof subject.countStatuses>, [values: subject.Status[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.countStatuses>, false>>;


