import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.loadName>, Promise<string>>>;
type InputContract = Expect<Equal<Parameters<typeof subject.loadName>, [load: () => Promise<string>]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.loadName>, false>>;


