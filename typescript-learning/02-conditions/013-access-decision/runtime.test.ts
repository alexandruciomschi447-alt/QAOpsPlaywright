import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [true,false] gives true", async () => {
 const args: unknown[] = [true,false];
 const before = structuredClone(args);
 expect(await subject.canEnter(...args as unknown as Parameters<typeof subject.canEnter>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [true,true] gives false", async () => {
 const args: unknown[] = [true,true];
 const before = structuredClone(args);
 expect(await subject.canEnter(...args as unknown as Parameters<typeof subject.canEnter>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [false,false] gives false", async () => {
 const args: unknown[] = [false,false];
 const before = structuredClone(args);
 expect(await subject.canEnter(...args as unknown as Parameters<typeof subject.canEnter>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [false,true] gives false", async () => {
 const args: unknown[] = [false,true];
 const before = structuredClone(args);
 expect(await subject.canEnter(...args as unknown as Parameters<typeof subject.canEnter>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

