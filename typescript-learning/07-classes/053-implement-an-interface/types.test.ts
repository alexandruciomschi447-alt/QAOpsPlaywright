import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type Shape = Expect<Equal<subject.UpperFormatter, subject.Formatter>>;

