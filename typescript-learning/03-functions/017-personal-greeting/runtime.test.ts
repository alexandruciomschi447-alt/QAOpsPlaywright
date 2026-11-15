import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"Ada\"] gives \"Hello, Ada!\"", async () => {
 const args: unknown[] = ["Ada"];
 const before = structuredClone(args);
 expect(await subject.greet(...args as unknown as Parameters<typeof subject.greet>)).toEqual("Hello, Ada!");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"\"] gives \"Hello, !\"", async () => {
 const args: unknown[] = [""];
 const before = structuredClone(args);
 expect(await subject.greet(...args as unknown as Parameters<typeof subject.greet>)).toEqual("Hello, !");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

