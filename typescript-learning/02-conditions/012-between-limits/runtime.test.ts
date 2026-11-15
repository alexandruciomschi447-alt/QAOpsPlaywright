import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [3,1,5] gives true", async () => {
 const args: unknown[] = [3,1,5];
 const before = structuredClone(args);
 expect(await subject.inRange(...args as unknown as Parameters<typeof subject.inRange>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [1,1,5] gives true", async () => {
 const args: unknown[] = [1,1,5];
 const before = structuredClone(args);
 expect(await subject.inRange(...args as unknown as Parameters<typeof subject.inRange>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [5,1,5] gives true", async () => {
 const args: unknown[] = [5,1,5];
 const before = structuredClone(args);
 expect(await subject.inRange(...args as unknown as Parameters<typeof subject.inRange>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [6,1,5] gives false", async () => {
 const args: unknown[] = [6,1,5];
 const before = structuredClone(args);
 expect(await subject.inRange(...args as unknown as Parameters<typeof subject.inRange>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

