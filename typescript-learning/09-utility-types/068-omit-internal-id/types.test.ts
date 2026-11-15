import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.NewUser, Omit<subject.User, 'id'>>>;
const good: subject.NewUser = {name:'A'};
// @ts-expect-error id was removed
const bad: subject.NewUser = {id:1,name:'A'};

