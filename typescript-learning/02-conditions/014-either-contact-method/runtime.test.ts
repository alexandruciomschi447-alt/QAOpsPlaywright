import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"\",\"\"] gives false", async () => {
 const args: unknown[] = ["",""];
 const before = structuredClone(args);
 expect(await subject.hasContact(...args as unknown as Parameters<typeof subject.hasContact>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"a@b\",\"\"] gives true", async () => {
 const args: unknown[] = ["a@b",""];
 const before = structuredClone(args);
 expect(await subject.hasContact(...args as unknown as Parameters<typeof subject.hasContact>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"\",\"123\"] gives true", async () => {
 const args: unknown[] = ["","123"];
 const before = structuredClone(args);
 expect(await subject.hasContact(...args as unknown as Parameters<typeof subject.hasContact>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [\"a\",\"b\"] gives true", async () => {
 const args: unknown[] = ["a","b"];
 const before = structuredClone(args);
 expect(await subject.hasContact(...args as unknown as Parameters<typeof subject.hasContact>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

