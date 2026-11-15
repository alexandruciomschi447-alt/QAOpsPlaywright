import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[1,2,3,4,5],2] gives [[1,2],[3,4],[5]]", async () => {
 const args: unknown[] = [[1,2,3,4,5],2];
 const before = structuredClone(args);
 expect(await subject.chunk(...args as unknown as Parameters<typeof subject.chunk>)).toEqual([[1,2],[3,4],[5]]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[],3] gives []", async () => {
 const args: unknown[] = [[],3];
 const before = structuredClone(args);
 expect(await subject.chunk(...args as unknown as Parameters<typeof subject.chunk>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[1,2],5] gives [[1,2]]", async () => {
 const args: unknown[] = [[1,2],5];
 const before = structuredClone(args);
 expect(await subject.chunk(...args as unknown as Parameters<typeof subject.chunk>)).toEqual([[1,2]]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

