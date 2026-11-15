import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"id\":1,\"name\":\"A\"},{\"name\":\"B\"}] gives {\"id\":1,\"name\":\"B\"}", async () => {
 const args: unknown[] = [{"id":1,"name":"A"},{"name":"B"}];
 const before = structuredClone(args);
 expect(await subject.patch(...args as unknown as Parameters<typeof subject.patch>)).toEqual({"id":1,"name":"B"});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"id\":1,\"name\":\"A\"},{}] gives {\"id\":1,\"name\":\"A\"}", async () => {
 const args: unknown[] = [{"id":1,"name":"A"},{}];
 const before = structuredClone(args);
 expect(await subject.patch(...args as unknown as Parameters<typeof subject.patch>)).toEqual({"id":1,"name":"A"});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

