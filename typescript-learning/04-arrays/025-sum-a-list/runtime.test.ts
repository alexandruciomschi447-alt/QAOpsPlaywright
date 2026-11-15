import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[1,2,3]] gives 6", async () => {
 const args: unknown[] = [[1,2,3]];
 const before = structuredClone(args);
 expect(await subject.sum(...args as unknown as Parameters<typeof subject.sum>)).toEqual(6);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives 0", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.sum(...args as unknown as Parameters<typeof subject.sum>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[-2,2]] gives 0", async () => {
 const args: unknown[] = [[-2,2]];
 const before = structuredClone(args);
 expect(await subject.sum(...args as unknown as Parameters<typeof subject.sum>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

