import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[10,2,-1,2]] gives [-1,2,2,10]", async () => {
 const args: unknown[] = [[10,2,-1,2]];
 const before = structuredClone(args);
 expect(await subject.sortNumbers(...args as unknown as Parameters<typeof subject.sortNumbers>)).toEqual([-1,2,2,10]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives []", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.sortNumbers(...args as unknown as Parameters<typeof subject.sortNumbers>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[5]] gives [5]", async () => {
 const args: unknown[] = [[5]];
 const before = structuredClone(args);
 expect(await subject.sortNumbers(...args as unknown as Parameters<typeof subject.sortNumbers>)).toEqual([5]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

