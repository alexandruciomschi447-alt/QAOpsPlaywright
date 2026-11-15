import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"ok\":true,\"value\":\"saved\"}] gives \"OK: saved\"", async () => {
 const args: unknown[] = [{"ok":true,"value":"saved"}];
 const before = structuredClone(args);
 expect(await subject.message(...args as unknown as Parameters<typeof subject.message>)).toEqual("OK: saved");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"ok\":false,\"error\":\"offline\"}] gives \"Error: offline\"", async () => {
 const args: unknown[] = [{"ok":false,"error":"offline"}];
 const before = structuredClone(args);
 expect(await subject.message(...args as unknown as Parameters<typeof subject.message>)).toEqual("Error: offline");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [{\"ok\":true,\"value\":\"\"}] gives \"OK: \"", async () => {
 const args: unknown[] = [{"ok":true,"value":""}];
 const before = structuredClone(args);
 expect(await subject.message(...args as unknown as Parameters<typeof subject.message>)).toEqual("OK: ");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

