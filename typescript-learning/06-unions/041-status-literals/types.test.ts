import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type Shape = Expect<Equal<subject.Status, 'idle' | 'running' | 'done'>>;
const good: subject.Status = 'idle';
// @ts-expect-error unsupported status
const bad: subject.Status = 'failed';

