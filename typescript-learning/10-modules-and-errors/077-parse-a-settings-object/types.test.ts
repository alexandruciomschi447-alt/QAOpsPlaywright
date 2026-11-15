import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.parseSettings>, subject.Settings | null>>;
type InputContract = Expect<Equal<Parameters<typeof subject.parseSettings>, [text: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.parseSettings>, false>>;


