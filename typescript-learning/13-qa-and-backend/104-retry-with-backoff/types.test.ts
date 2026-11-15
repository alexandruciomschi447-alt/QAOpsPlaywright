import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.retryWithDelay>, false>>;

const result = subject.retryWithDelay(async () => 'x', 1, 0, async () => {});
type RetryResult = Expect<Equal<typeof result, Promise<string>>>;
