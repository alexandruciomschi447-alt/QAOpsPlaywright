import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.execute>, Promise<subject.Response>>>;
type InputContract = Expect<Equal<Parameters<typeof subject.execute>, [request: unknown, dependencies: subject.Dependencies]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.execute>, false>>;


