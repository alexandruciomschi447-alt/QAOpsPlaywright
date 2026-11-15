import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
const a: subject.Animal = new subject.Dog('Rex');
// @ts-expect-error protected name
a.name;
type DogKeys = Expect<Equal<keyof subject.Dog, 'speak'>>;

