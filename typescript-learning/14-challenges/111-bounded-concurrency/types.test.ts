import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.runLimited>, false>>;

const a = subject.runLimited([async () => 'x'], 2);
type A = Expect<Equal<typeof a, Promise<Array<subject.Outcome<string>>>>>;
