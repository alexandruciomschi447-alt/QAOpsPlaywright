import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Update, Partial<subject.User>>>;
const good: subject.Update = {};
// @ts-expect-error wrong id type
const bad: subject.Update = {id:'1'};

