import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.formatUser>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.formatUser>, [user: import('./model').User]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.formatUser>, false>>;


