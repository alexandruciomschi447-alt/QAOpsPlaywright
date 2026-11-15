import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.loadOrDefault>, Promise<string>>>;
type InputContract = Expect<Equal<Parameters<typeof subject.loadOrDefault>, [load: () => Promise<string>, fallback: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.loadOrDefault>, false>>;


