import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
declare const a: subject.Account;
type Name = Expect<Equal<typeof a.name, string>>;
// @ts-expect-error name is readonly
a.name = 'B';
type Keys = Expect<Equal<keyof subject.Account, 'name' | 'deposit' | 'balance'>>;

