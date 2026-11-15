import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"{\\\"x\\\":1}\"] gives {\"ok\":true,\"value\":{\"x\":1}}", async () => {
 const args: unknown[] = ["{\"x\":1}"];
 const before = structuredClone(args);
 expect(await subject.parseJson(...args as unknown as Parameters<typeof subject.parseJson>)).toEqual({"ok":true,"value":{"x":1}});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"null\"] gives {\"ok\":true,\"value\":null}", async () => {
 const args: unknown[] = ["null"];
 const before = structuredClone(args);
 expect(await subject.parseJson(...args as unknown as Parameters<typeof subject.parseJson>)).toEqual({"ok":true,"value":null});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"[1]\"] gives {\"ok\":true,\"value\":[1]}", async () => {
 const args: unknown[] = ["[1]"];
 const before = structuredClone(args);
 expect(await subject.parseJson(...args as unknown as Parameters<typeof subject.parseJson>)).toEqual({"ok":true,"value":[1]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [\"3\"] gives {\"ok\":true,\"value\":3}", async () => {
 const args: unknown[] = ["3"];
 const before = structuredClone(args);
 expect(await subject.parseJson(...args as unknown as Parameters<typeof subject.parseJson>)).toEqual({"ok":true,"value":3});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 5: [\"bad\"] gives {\"ok\":false,\"error\":\"Invalid JSON\"}", async () => {
 const args: unknown[] = ["bad"];
 const before = structuredClone(args);
 expect(await subject.parseJson(...args as unknown as Parameters<typeof subject.parseJson>)).toEqual({"ok":false,"error":"Invalid JSON"});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 6: [\"\"] gives {\"ok\":false,\"error\":\"Invalid JSON\"}", async () => {
 const args: unknown[] = [""];
 const before = structuredClone(args);
 expect(await subject.parseJson(...args as unknown as Parameters<typeof subject.parseJson>)).toEqual({"ok":false,"error":"Invalid JSON"});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

