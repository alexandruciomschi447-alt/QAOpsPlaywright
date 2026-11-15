import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[{\"id\":1,\"name\":\"Ada\"},{\"id\":2,\"name\":\"Grace\"},{\"id\":3,\"name\":\"ADAM\"}],\" ad \"] gives [{\"id\":1,\"name\":\"Ada\"},{\"id\":3,\"name\":\"ADAM\"}]", async () => {
 const args: unknown[] = [[{"id":1,"name":"Ada"},{"id":2,"name":"Grace"},{"id":3,"name":"ADAM"}]," ad "];
 const before = structuredClone(args);
 expect(await subject.searchUsers(...args as unknown as Parameters<typeof subject.searchUsers>)).toEqual([{"id":1,"name":"Ada"},{"id":3,"name":"ADAM"}]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[],\"x\"] gives []", async () => {
 const args: unknown[] = [[],"x"];
 const before = structuredClone(args);
 expect(await subject.searchUsers(...args as unknown as Parameters<typeof subject.searchUsers>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[{\"id\":1,\"name\":\"Ada\"}],\"   \"] gives [{\"id\":1,\"name\":\"Ada\"}]", async () => {
 const args: unknown[] = [[{"id":1,"name":"Ada"}],"   "];
 const before = structuredClone(args);
 expect(await subject.searchUsers(...args as unknown as Parameters<typeof subject.searchUsers>)).toEqual([{"id":1,"name":"Ada"}]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

