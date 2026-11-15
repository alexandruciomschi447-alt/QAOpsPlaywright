import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.getId>, false>>;

// @ts-expect-error id is required
subject.getId({name: 'A'});
// @ts-expect-error id must be numeric
subject.getId({id: '3'});
const id = subject.getId({id:1,name:'A'});
type IdResult = Expect<Equal<typeof id, number>>;
