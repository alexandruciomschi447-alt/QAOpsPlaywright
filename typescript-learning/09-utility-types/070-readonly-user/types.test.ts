import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Snapshot, Readonly<subject.User>>>;
declare const a: subject.Snapshot;
// @ts-expect-error readonly name
a.name = 'B';
// @ts-expect-error readonly id
a.id = 2;

