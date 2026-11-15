import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.patch>, subject.User>>;
type InputContract = Expect<Equal<Parameters<typeof subject.patch>, [user: subject.User, update: Partial<subject.User>]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.patch>, false>>;

// @ts-expect-error incorrect patch property type
subject.patch({id:1,name:'A'}, {id:'2'});
