import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.displayName>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.displayName>, [profile: subject.Profile]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.displayName>, false>>;


