import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.personLabel>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.personLabel>, [person: subject.Person]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.personLabel>, false>>;


