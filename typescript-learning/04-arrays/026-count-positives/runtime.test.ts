import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[0,-1,2,3]] gives 2", async () => {
 const args: unknown[] = [[0,-1,2,3]];
 const before = structuredClone(args);
 expect(await subject.countPositive(...args as unknown as Parameters<typeof subject.countPositive>)).toEqual(2);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives 0", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.countPositive(...args as unknown as Parameters<typeof subject.countPositive>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[-3]] gives 0", async () => {
 const args: unknown[] = [[-3]];
 const before = structuredClone(args);
 expect(await subject.countPositive(...args as unknown as Parameters<typeof subject.countPositive>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

