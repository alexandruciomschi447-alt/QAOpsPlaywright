import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Complete, Required<subject.User>>>;
const good: subject.Complete = {id:1,name:'A',email:'a@b'};
// @ts-expect-error missing email
const bad: subject.Complete = {id:1,name:'A'};

