import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
declare const a: subject.Rectangle;
// @ts-expect-error width is readonly
a.width = 2;
// @ts-expect-error height is readonly
a.height = 2;
type Width = Expect<Equal<typeof a.width, number>>;

