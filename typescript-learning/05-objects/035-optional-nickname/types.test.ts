import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type Shape = Expect<Equal<subject.Profile, { id: number; nickname?: string }>>;
const a: subject.Profile = { id: 1 };
const b: subject.Profile = { id: 1, nickname: 'A' };
// @ts-expect-error id is required
const c: subject.Profile = {};
// @ts-expect-error nickname must be text
const d: subject.Profile = { id: 1, nickname: 2 };

