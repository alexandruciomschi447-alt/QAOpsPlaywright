import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{}] gives 0", async () => {
 const args: unknown[] = [{}];
 const before = structuredClone(args);
 expect(await subject.countKeys(...args as unknown as Parameters<typeof subject.countKeys>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"a\":1,\"b\":2}] gives 2", async () => {
 const args: unknown[] = [{"a":1,"b":2}];
 const before = structuredClone(args);
 expect(await subject.countKeys(...args as unknown as Parameters<typeof subject.countKeys>)).toEqual(2);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement: inherited properties do not count', () => { const value = Object.assign(Object.create({ inherited: 1 }), { own: 2 }); expect(subject.countKeys(value)).toBe(1); });
