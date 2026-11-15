import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
// @ts-expect-error constructor is private
new subject.Temperature(0);
declare const a: subject.Temperature;
// @ts-expect-error readonly celsius
a.celsius = 1;
type Celsius = Expect<Equal<typeof a.celsius, number>>;

