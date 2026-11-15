import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [10,3] gives 1", async () => {
 const args: unknown[] = [10,3];
 const before = structuredClone(args);
 expect(await subject.remainder(...args as unknown as Parameters<typeof subject.remainder>)).toEqual(1);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [9,3] gives 0", async () => {
 const args: unknown[] = [9,3];
 const before = structuredClone(args);
 expect(await subject.remainder(...args as unknown as Parameters<typeof subject.remainder>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [-7,3] gives -1", async () => {
 const args: unknown[] = [-7,3];
 const before = structuredClone(args);
 expect(await subject.remainder(...args as unknown as Parameters<typeof subject.remainder>)).toEqual(-1);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

