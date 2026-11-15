import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [3,4] gives 12", async () => {
 const args: unknown[] = [3,4];
 const before = structuredClone(args);
 expect(await subject.area(...args as unknown as Parameters<typeof subject.area>)).toEqual(12);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [0,4] gives 0", async () => {
 const args: unknown[] = [0,4];
 const before = structuredClone(args);
 expect(await subject.area(...args as unknown as Parameters<typeof subject.area>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [1.5,2] gives 3", async () => {
 const args: unknown[] = [1.5,2];
 const before = structuredClone(args);
 expect(await subject.area(...args as unknown as Parameters<typeof subject.area>)).toEqual(3);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

