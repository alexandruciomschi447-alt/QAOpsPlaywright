import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.convert>, false>>;

const a = subject.convert('12');
const b = subject.convert(12);
type A = Expect<Equal<typeof a, number>>;
type B = Expect<Equal<typeof b, string>>;
// @ts-expect-error booleans not supported
subject.convert(true);
