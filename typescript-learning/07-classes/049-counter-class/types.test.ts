import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type Keys = Expect<Equal<keyof subject.Counter, 'increment' | 'value'>>;

