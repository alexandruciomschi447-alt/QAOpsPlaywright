import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.paginate>, false>>;

const a = subject.paginate(['x'],1,2);
type A = Expect<Equal<typeof a, subject.Page<string>>>;
