import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"id\":1,\"name\":\"A\"}] gives true", async () => {
 const args: unknown[] = [{"id":1,"name":"A"}];
 const before = structuredClone(args);
 expect(await subject.isUser(...args as unknown as Parameters<typeof subject.isUser>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"id\":1.5,\"name\":\"A\"}] gives false", async () => {
 const args: unknown[] = [{"id":1.5,"name":"A"}];
 const before = structuredClone(args);
 expect(await subject.isUser(...args as unknown as Parameters<typeof subject.isUser>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [{\"id\":1}] gives false", async () => {
 const args: unknown[] = [{"id":1}];
 const before = structuredClone(args);
 expect(await subject.isUser(...args as unknown as Parameters<typeof subject.isUser>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [null] gives false", async () => {
 const args: unknown[] = [null];
 const before = structuredClone(args);
 expect(await subject.isUser(...args as unknown as Parameters<typeof subject.isUser>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 5: [[]] gives false", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.isUser(...args as unknown as Parameters<typeof subject.isUser>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 6: [{\"id\":0,\"name\":\"\",\"extra\":true}] gives true", async () => {
 const args: unknown[] = [{"id":0,"name":"","extra":true}];
 const before = structuredClone(args);
 expect(await subject.isUser(...args as unknown as Parameters<typeof subject.isUser>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

