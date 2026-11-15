import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"abc\"] gives 3", async () => {
 const args: unknown[] = ["abc"];
 const before = structuredClone(args);
 expect(await subject.textLength(...args as unknown as Parameters<typeof subject.textLength>)).toEqual(3);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [null] gives 0", async () => {
 const args: unknown[] = [null];
 const before = structuredClone(args);
 expect(await subject.textLength(...args as unknown as Parameters<typeof subject.textLength>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [3] gives 0", async () => {
 const args: unknown[] = [3];
 const before = structuredClone(args);
 expect(await subject.textLength(...args as unknown as Parameters<typeof subject.textLength>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [{}] gives 0", async () => {
 const args: unknown[] = [{}];
 const before = structuredClone(args);
 expect(await subject.textLength(...args as unknown as Parameters<typeof subject.textLength>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 5: [[]] gives 0", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.textLength(...args as unknown as Parameters<typeof subject.textLength>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 6: [false] gives 0", async () => {
 const args: unknown[] = [false];
 const before = structuredClone(args);
 expect(await subject.textLength(...args as unknown as Parameters<typeof subject.textLength>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

