import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
declare const a: subject.Vault;
// @ts-expect-error secret must be private
a.secret;
type Keys = Expect<Equal<keyof subject.Vault, 'matches'>>;

