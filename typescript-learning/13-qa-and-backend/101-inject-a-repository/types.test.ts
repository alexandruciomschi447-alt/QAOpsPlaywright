import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.findUser>, Promise<subject.User | null>>>;
type InputContract = Expect<Equal<Parameters<typeof subject.findUser>, [repository: subject.Repository, id: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.findUser>, false>>;


