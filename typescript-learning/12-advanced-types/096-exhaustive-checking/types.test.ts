import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.stateLabel>, string>>;
type InputContract = Expect<Equal<Parameters<typeof subject.stateLabel>, [state: subject.State]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.stateLabel>, false>>;

type Guard = Expect<Equal<typeof subject.assertNever, (value: never) => never>>;
// @ts-expect-error reachable values must be rejected
subject.assertNever({kind:'other'});
