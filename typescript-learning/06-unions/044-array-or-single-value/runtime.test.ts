import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [3] gives [3]", async () => {
 const args: unknown[] = [3];
 const before = structuredClone(args);
 expect(await subject.asList(...args as unknown as Parameters<typeof subject.asList>)).toEqual([3]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[1,2]] gives [1,2]", async () => {
 const args: unknown[] = [[1,2]];
 const before = structuredClone(args);
 expect(await subject.asList(...args as unknown as Parameters<typeof subject.asList>)).toEqual([1,2]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[]] gives []", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.asList(...args as unknown as Parameters<typeof subject.asList>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement: array inputs produce a separate array', () => { const input = [1]; expect(subject.asList(input)).not.toBe(input); });
