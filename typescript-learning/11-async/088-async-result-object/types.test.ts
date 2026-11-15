import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.attempt>, false>>;

const a = subject.attempt(async () => 1);
type A = Expect<Equal<typeof a, Promise<subject.Result<number>>>>;
