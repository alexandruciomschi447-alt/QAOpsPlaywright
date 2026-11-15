import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [null] gives \"Guest\"", async () => {
 const args: unknown[] = [null];
 const before = structuredClone(args);
 expect(await subject.nameOrGuest(...args as unknown as Parameters<typeof subject.nameOrGuest>)).toEqual("Guest");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"Ada\"] gives \"Ada\"", async () => {
 const args: unknown[] = ["Ada"];
 const before = structuredClone(args);
 expect(await subject.nameOrGuest(...args as unknown as Parameters<typeof subject.nameOrGuest>)).toEqual("Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"\"] gives \"\"", async () => {
 const args: unknown[] = [""];
 const before = structuredClone(args);
 expect(await subject.nameOrGuest(...args as unknown as Parameters<typeof subject.nameOrGuest>)).toEqual("");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

