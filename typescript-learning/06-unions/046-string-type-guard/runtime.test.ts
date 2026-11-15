import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"\"] gives true", async () => {
 const args: unknown[] = [""];
 const before = structuredClone(args);
 expect(await subject.isString(...args as unknown as Parameters<typeof subject.isString>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [3] gives false", async () => {
 const args: unknown[] = [3];
 const before = structuredClone(args);
 expect(await subject.isString(...args as unknown as Parameters<typeof subject.isString>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [null] gives false", async () => {
 const args: unknown[] = [null];
 const before = structuredClone(args);
 expect(await subject.isString(...args as unknown as Parameters<typeof subject.isString>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [{}] gives false", async () => {
 const args: unknown[] = [{}];
 const before = structuredClone(args);
 expect(await subject.isString(...args as unknown as Parameters<typeof subject.isString>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

