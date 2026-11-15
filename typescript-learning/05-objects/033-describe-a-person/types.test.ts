import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type Shape = Expect<Equal<subject.Person, { name: string; age: number }>>;
const good: subject.Person = { name: 'Ada', age: 30 };
// @ts-expect-error age is required
const missing: subject.Person = { name: 'Ada' };
// @ts-expect-error age is numeric
const wrong: subject.Person = { name: 'Ada', age: '30' };

