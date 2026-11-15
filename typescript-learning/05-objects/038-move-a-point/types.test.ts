import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type ReturnContract = Expect<Equal<ReturnType<typeof subject.move>, subject.Point>>;
type InputContract = Expect<Equal<Parameters<typeof subject.move>, [point: subject.Point, dx: number, dy: number]>>;
type FunctionNotAny = Expect<Equal<IsAny<typeof subject.move>, false>>;


