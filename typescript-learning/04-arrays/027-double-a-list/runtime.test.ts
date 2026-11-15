import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[1,-2,0]] gives [2,-4,0]", async () => {
 const args: unknown[] = [[1,-2,0]];
 const before = structuredClone(args);
 expect(await subject.doubleAll(...args as unknown as Parameters<typeof subject.doubleAll>)).toEqual([2,-4,0]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives []", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.doubleAll(...args as unknown as Parameters<typeof subject.doubleAll>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

