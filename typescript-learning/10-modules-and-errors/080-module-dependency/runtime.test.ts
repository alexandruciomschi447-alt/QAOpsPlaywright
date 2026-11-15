import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"id\":2,\"name\":\"Ada\"}] gives \"2 / Ada\"", async () => {
 const args: unknown[] = [{"id":2,"name":"Ada"}];
 const before = structuredClone(args);
 expect(await subject.formatUser(...args as unknown as Parameters<typeof subject.formatUser>)).toEqual("2 / Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"id\":0,\"name\":\"\"}] gives \"0 / \"", async () => {
 const args: unknown[] = [{"id":0,"name":""}];
 const before = structuredClone(args);
 expect(await subject.formatUser(...args as unknown as Parameters<typeof subject.formatUser>)).toEqual("0 / ");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

