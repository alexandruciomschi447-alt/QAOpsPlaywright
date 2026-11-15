import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type Shape = Expect<Equal<subject.Point, { x: number; y: number }>>;
const good: subject.Point = { x: 0, y: -1 };
// @ts-expect-error missing y
const bad: subject.Point = { x: 0 };

