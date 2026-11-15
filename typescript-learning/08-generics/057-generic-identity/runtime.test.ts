import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [3] gives 3", async () => {
 const args: unknown[] = [3];
 const before = structuredClone(args);
 expect(await subject.identity(...args as unknown as Parameters<typeof subject.identity>)).toEqual(3);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"x\"] gives \"x\"", async () => {
 const args: unknown[] = ["x"];
 const before = structuredClone(args);
 expect(await subject.identity(...args as unknown as Parameters<typeof subject.identity>)).toEqual("x");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement: preserve reference identity', () => { const a = {x: 1}; expect(subject.identity(a)).toBe(a); });
