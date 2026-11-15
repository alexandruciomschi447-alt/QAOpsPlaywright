import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"[{\\\"id\\\":1,\\\"name\\\":\\\" A \\\"},{\\\"id\\\":1,\\\"name\\\":\\\"B\\\"},null,{\\\"id\\\":2,\\\"name\\\":\\\"\\\"},{\\\"id\\\":3,\\\"name\\\":\\\"C\\\"}]\"] gives {\"ok\":true,\"users\":[{\"id\":1,\"name\":\"A\"},{\"id\":3,\"name\":\"C\"}],\"rejected\":3}", async () => {
 const args: unknown[] = ["[{\"id\":1,\"name\":\" A \"},{\"id\":1,\"name\":\"B\"},null,{\"id\":2,\"name\":\"\"},{\"id\":3,\"name\":\"C\"}]"];
 const before = structuredClone(args);
 expect(await subject.importUsers(...args as unknown as Parameters<typeof subject.importUsers>)).toEqual({"ok":true,"users":[{"id":1,"name":"A"},{"id":3,"name":"C"}],"rejected":3});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"[]\"] gives {\"ok\":true,\"users\":[],\"rejected\":0}", async () => {
 const args: unknown[] = ["[]"];
 const before = structuredClone(args);
 expect(await subject.importUsers(...args as unknown as Parameters<typeof subject.importUsers>)).toEqual({"ok":true,"users":[],"rejected":0});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"bad\"] gives {\"ok\":false,\"error\":\"Invalid input\"}", async () => {
 const args: unknown[] = ["bad"];
 const before = structuredClone(args);
 expect(await subject.importUsers(...args as unknown as Parameters<typeof subject.importUsers>)).toEqual({"ok":false,"error":"Invalid input"});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [\"{}\"] gives {\"ok\":false,\"error\":\"Invalid input\"}", async () => {
 const args: unknown[] = ["{}"];
 const before = structuredClone(args);
 expect(await subject.importUsers(...args as unknown as Parameters<typeof subject.importUsers>)).toEqual({"ok":false,"error":"Invalid input"});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 5: [\"[{\\\"id\\\":1,\\\"name\\\":\\\"\\\"},{\\\"id\\\":1,\\\"name\\\":\\\"A\\\"}]\"] gives {\"ok\":true,\"users\":[{\"id\":1,\"name\":\"A\"}],\"rejected\":1}", async () => {
 const args: unknown[] = ["[{\"id\":1,\"name\":\"\"},{\"id\":1,\"name\":\"A\"}]"];
 const before = structuredClone(args);
 expect(await subject.importUsers(...args as unknown as Parameters<typeof subject.importUsers>)).toEqual({"ok":true,"users":[{"id":1,"name":"A"}],"rejected":1});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

