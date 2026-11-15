import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [100] gives 20", async () => {
 const args: unknown[] = [100];
 const before = structuredClone(args);
 expect(await subject.discount(...args as unknown as Parameters<typeof subject.discount>)).toEqual(20);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [99] gives 10", async () => {
 const args: unknown[] = [99];
 const before = structuredClone(args);
 expect(await subject.discount(...args as unknown as Parameters<typeof subject.discount>)).toEqual(10);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [50] gives 10", async () => {
 const args: unknown[] = [50];
 const before = structuredClone(args);
 expect(await subject.discount(...args as unknown as Parameters<typeof subject.discount>)).toEqual(10);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [49] gives 0", async () => {
 const args: unknown[] = [49];
 const before = structuredClone(args);
 expect(await subject.discount(...args as unknown as Parameters<typeof subject.discount>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 5: [0] gives 0", async () => {
 const args: unknown[] = [0];
 const before = structuredClone(args);
 expect(await subject.discount(...args as unknown as Parameters<typeof subject.discount>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

