import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"id\":7}] gives \"User 7\"", async () => {
 const args: unknown[] = [{"id":7}];
 const before = structuredClone(args);
 expect(await subject.displayName(...args as unknown as Parameters<typeof subject.displayName>)).toEqual("User 7");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"id\":7,\"nickname\":\"Ada\"}] gives \"Ada\"", async () => {
 const args: unknown[] = [{"id":7,"nickname":"Ada"}];
 const before = structuredClone(args);
 expect(await subject.displayName(...args as unknown as Parameters<typeof subject.displayName>)).toEqual("Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [{\"id\":0,\"nickname\":\"\"}] gives \"\"", async () => {
 const args: unknown[] = [{"id":0,"nickname":""}];
 const before = structuredClone(args);
 expect(await subject.displayName(...args as unknown as Parameters<typeof subject.displayName>)).toEqual("");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

