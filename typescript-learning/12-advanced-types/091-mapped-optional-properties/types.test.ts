import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Optional<{id:number;name:string}>, {id?:number;name?:string}>>;
type B = Expect<Equal<subject.Optional<{}>, {}>>;
// @ts-expect-error wrong property type
const bad: subject.Optional<{id:number}> = {id:'x'};

