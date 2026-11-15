import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [2,3] gives 5", async () => {
 const args: unknown[] = [2,3];
 const before = structuredClone(args);
 expect(await subject.add(...args as unknown as Parameters<typeof subject.add>)).toEqual(5);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [0,0] gives 0", async () => {
 const args: unknown[] = [0,0];
 const before = structuredClone(args);
 expect(await subject.add(...args as unknown as Parameters<typeof subject.add>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [-4,1] gives -3", async () => {
 const args: unknown[] = [-4,1];
 const before = structuredClone(args);
 expect(await subject.add(...args as unknown as Parameters<typeof subject.add>)).toEqual(-3);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

