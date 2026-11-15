import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.waitAndReturn>, false>>;

const a = subject.waitAndReturn('x' as const, 0, async () => {});
type A = Expect<Equal<typeof a, Promise<'x'>>>;
