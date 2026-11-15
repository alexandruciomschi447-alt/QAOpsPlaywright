import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.reduceEvents>, subject.State>>;
type InputContract = Expect<Equal<Parameters<typeof subject.reduceEvents>, [events: subject.Event[]]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.reduceEvents>, false>>;


