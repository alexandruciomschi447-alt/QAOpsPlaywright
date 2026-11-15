import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Box<string>, {value: string}>>;
type B = Expect<Equal<subject.Box<number>, {value: number}>>;
// @ts-expect-error wrong contained type
const a: subject.Box<number> = {value: 'x'};

