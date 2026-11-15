import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.identity>, false>>;

const a = subject.identity('x' as const);
type A = Expect<Equal<typeof a, 'x'>>;
const b = subject.identity(3 as const);
type B = Expect<Equal<typeof b, 3>>;
