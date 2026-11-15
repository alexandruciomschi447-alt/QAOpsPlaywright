import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [2] gives 120", async () => {
 const args: unknown[] = [2];
 const before = structuredClone(args);
 expect(await subject.seconds(...args as unknown as Parameters<typeof subject.seconds>)).toEqual(120);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [0] gives 0", async () => {
 const args: unknown[] = [0];
 const before = structuredClone(args);
 expect(await subject.seconds(...args as unknown as Parameters<typeof subject.seconds>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [0.5] gives 30", async () => {
 const args: unknown[] = [0.5];
 const before = structuredClone(args);
 expect(await subject.seconds(...args as unknown as Parameters<typeof subject.seconds>)).toEqual(30);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

