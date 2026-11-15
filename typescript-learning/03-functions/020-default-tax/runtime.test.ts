import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [100] gives 120", async () => {
 const args: unknown[] = [100];
 const before = structuredClone(args);
 expect(await subject.withTax(...args as unknown as Parameters<typeof subject.withTax>)).toEqual(120);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [100,0] gives 100", async () => {
 const args: unknown[] = [100,0];
 const before = structuredClone(args);
 expect(await subject.withTax(...args as unknown as Parameters<typeof subject.withTax>)).toEqual(100);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [50,0.1] gives 55", async () => {
 const args: unknown[] = [50,0.1];
 const before = structuredClone(args);
 expect(await subject.withTax(...args as unknown as Parameters<typeof subject.withTax>)).toEqual(55);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [0] gives 0", async () => {
 const args: unknown[] = [0];
 const before = structuredClone(args);
 expect(await subject.withTax(...args as unknown as Parameters<typeof subject.withTax>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

