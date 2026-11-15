import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [18] gives true", async () => {
 const args: unknown[] = [18];
 const before = structuredClone(args);
 expect(await subject.isAdult(...args as unknown as Parameters<typeof subject.isAdult>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [17] gives false", async () => {
 const args: unknown[] = [17];
 const before = structuredClone(args);
 expect(await subject.isAdult(...args as unknown as Parameters<typeof subject.isAdult>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [0] gives false", async () => {
 const args: unknown[] = [0];
 const before = structuredClone(args);
 expect(await subject.isAdult(...args as unknown as Parameters<typeof subject.isAdult>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [80] gives true", async () => {
 const args: unknown[] = [80];
 const before = structuredClone(args);
 expect(await subject.isAdult(...args as unknown as Parameters<typeof subject.isAdult>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

