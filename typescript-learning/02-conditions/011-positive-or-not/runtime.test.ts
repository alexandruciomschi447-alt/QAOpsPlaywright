import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [3] gives \"positive\"", async () => {
 const args: unknown[] = [3];
 const before = structuredClone(args);
 expect(await subject.sign(...args as unknown as Parameters<typeof subject.sign>)).toEqual("positive");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [-1] gives \"negative\"", async () => {
 const args: unknown[] = [-1];
 const before = structuredClone(args);
 expect(await subject.sign(...args as unknown as Parameters<typeof subject.sign>)).toEqual("negative");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [0] gives \"zero\"", async () => {
 const args: unknown[] = [0];
 const before = structuredClone(args);
 expect(await subject.sign(...args as unknown as Parameters<typeof subject.sign>)).toEqual("zero");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

