import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.getProperty>, false>>;

const a = subject.getProperty({name: 'A', age: 3}, 'age');
type A = Expect<Equal<typeof a, number>>;
// @ts-expect-error unknown key
subject.getProperty({name:'A'}, 'age');
