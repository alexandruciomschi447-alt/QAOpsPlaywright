import * as subject from './exercise';
import type { Equal, Expect, IsAny } from '../../checks/assertions';
type A = Expect<Equal<subject.Ports, Record<'dev' | 'test', number>>>;
const good: subject.Ports = {dev:3000,test:3001};
// @ts-expect-error test is required
const bad: subject.Ports = {dev:3000};
// @ts-expect-error unknown environment
const extra: subject.Ports = {dev:1,test:2,prod:3};

