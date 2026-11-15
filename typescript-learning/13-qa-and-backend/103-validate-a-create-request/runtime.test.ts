import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"name\":\" Ada \",\"age\":30,\"extra\":true}] gives {\"ok\":true,\"user\":{\"name\":\"Ada\",\"age\":30}}", async () => {
 const args: unknown[] = [{"name":" Ada ","age":30,"extra":true}];
 const before = structuredClone(args);
 expect(await subject.validateCreate(...args as unknown as Parameters<typeof subject.validateCreate>)).toEqual({"ok":true,"user":{"name":"Ada","age":30}});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"name\":\"\",\"age\":-1}] gives {\"ok\":false,\"errors\":[\"name\",\"age\"]}", async () => {
 const args: unknown[] = [{"name":"","age":-1}];
 const before = structuredClone(args);
 expect(await subject.validateCreate(...args as unknown as Parameters<typeof subject.validateCreate>)).toEqual({"ok":false,"errors":["name","age"]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [{\"name\":\"A\",\"age\":1.5}] gives {\"ok\":false,\"errors\":[\"age\"]}", async () => {
 const args: unknown[] = [{"name":"A","age":1.5}];
 const before = structuredClone(args);
 expect(await subject.validateCreate(...args as unknown as Parameters<typeof subject.validateCreate>)).toEqual({"ok":false,"errors":["age"]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [{\"age\":0}] gives {\"ok\":false,\"errors\":[\"name\"]}", async () => {
 const args: unknown[] = [{"age":0}];
 const before = structuredClone(args);
 expect(await subject.validateCreate(...args as unknown as Parameters<typeof subject.validateCreate>)).toEqual({"ok":false,"errors":["name"]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 5: [null] gives {\"ok\":false,\"errors\":[\"body\"]}", async () => {
 const args: unknown[] = [null];
 const before = structuredClone(args);
 expect(await subject.validateCreate(...args as unknown as Parameters<typeof subject.validateCreate>)).toEqual({"ok":false,"errors":["body"]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 6: [[]] gives {\"ok\":false,\"errors\":[\"body\"]}", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.validateCreate(...args as unknown as Parameters<typeof subject.validateCreate>)).toEqual({"ok":false,"errors":["body"]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 7: [{\"name\":\"A\",\"age\":130}] gives {\"ok\":true,\"user\":{\"name\":\"A\",\"age\":130}}", async () => {
 const args: unknown[] = [{"name":"A","age":130}];
 const before = structuredClone(args);
 expect(await subject.validateCreate(...args as unknown as Parameters<typeof subject.validateCreate>)).toEqual({"ok":true,"user":{"name":"A","age":130}});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

