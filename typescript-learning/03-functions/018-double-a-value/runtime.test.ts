import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [3] gives 6", async () => {
 const args: unknown[] = [3];
 const before = structuredClone(args);
 expect(await subject.double(...args as unknown as Parameters<typeof subject.double>)).toEqual(6);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [0] gives 0", async () => {
 const args: unknown[] = [0];
 const before = structuredClone(args);
 expect(await subject.double(...args as unknown as Parameters<typeof subject.double>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [-2] gives -4", async () => {
 const args: unknown[] = [-2];
 const before = structuredClone(args);
 expect(await subject.double(...args as unknown as Parameters<typeof subject.double>)).toEqual(-4);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

