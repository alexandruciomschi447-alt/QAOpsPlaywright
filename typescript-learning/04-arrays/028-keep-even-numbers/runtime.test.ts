import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[1,2,0,-4,3]] gives [2,0,-4]", async () => {
 const args: unknown[] = [[1,2,0,-4,3]];
 const before = structuredClone(args);
 expect(await subject.evens(...args as unknown as Parameters<typeof subject.evens>)).toEqual([2,0,-4]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives []", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.evens(...args as unknown as Parameters<typeof subject.evens>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[1,3]] gives []", async () => {
 const args: unknown[] = [[1,3]];
 const before = structuredClone(args);
 expect(await subject.evens(...args as unknown as Parameters<typeof subject.evens>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

