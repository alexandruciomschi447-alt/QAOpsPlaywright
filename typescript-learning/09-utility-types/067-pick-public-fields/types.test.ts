import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.PublicUser, Pick<subject.User, 'id' | 'name'>>>;
const good: subject.PublicUser = {id:1,name:'A'};
// @ts-expect-error email is not a public field
const bad: subject.PublicUser = {id:1,name:'A',email:'x'};

