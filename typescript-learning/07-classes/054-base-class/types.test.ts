import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
class Child extends subject.Animal { read(): string { return this.name; } }
declare const a: subject.Animal;
// @ts-expect-error name is protected
a.name;
type Keys = Expect<Equal<keyof subject.Animal, 'speak'>>;

