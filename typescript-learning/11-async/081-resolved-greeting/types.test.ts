import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.greetAsync>, Promise<string>>>;
type InputContract = Expect<Equal<Parameters<typeof subject.greetAsync>, [name: string]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.greetAsync>, false>>;


