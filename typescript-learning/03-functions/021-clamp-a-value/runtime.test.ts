import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [5,1,10] gives 5", async () => {
 const args: unknown[] = [5,1,10];
 const before = structuredClone(args);
 expect(await subject.clamp(...args as unknown as Parameters<typeof subject.clamp>)).toEqual(5);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [-3,1,10] gives 1", async () => {
 const args: unknown[] = [-3,1,10];
 const before = structuredClone(args);
 expect(await subject.clamp(...args as unknown as Parameters<typeof subject.clamp>)).toEqual(1);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [12,1,10] gives 10", async () => {
 const args: unknown[] = [12,1,10];
 const before = structuredClone(args);
 expect(await subject.clamp(...args as unknown as Parameters<typeof subject.clamp>)).toEqual(10);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [2,2,2] gives 2", async () => {
 const args: unknown[] = [2,2,2];
 const before = structuredClone(args);
 expect(await subject.clamp(...args as unknown as Parameters<typeof subject.clamp>)).toEqual(2);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

