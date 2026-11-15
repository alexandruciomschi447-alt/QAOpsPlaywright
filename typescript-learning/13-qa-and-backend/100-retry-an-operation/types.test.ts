import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.retry>, false>>;

const a = subject.retry(async () => 'x', 1);
type A = Expect<Equal<typeof a, Promise<string>>>;
