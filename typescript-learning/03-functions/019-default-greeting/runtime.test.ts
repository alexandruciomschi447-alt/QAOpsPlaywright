import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [] gives \"Welcome, friend\"", async () => {
 const args: unknown[] = [];
 const before = structuredClone(args);
 expect(await subject.welcome(...args as unknown as Parameters<typeof subject.welcome>)).toEqual("Welcome, friend");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"Ada\"] gives \"Welcome, Ada\"", async () => {
 const args: unknown[] = ["Ada"];
 const before = structuredClone(args);
 expect(await subject.welcome(...args as unknown as Parameters<typeof subject.welcome>)).toEqual("Welcome, Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"\"] gives \"Welcome, \"", async () => {
 const args: unknown[] = [""];
 const before = structuredClone(args);
 expect(await subject.welcome(...args as unknown as Parameters<typeof subject.welcome>)).toEqual("Welcome, ");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

