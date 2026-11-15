import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"id\":3,\"name\":\"A\"}] gives 3", async () => {
 const args: unknown[] = [{"id":3,"name":"A"}];
 const before = structuredClone(args);
 expect(await subject.getId(...args as unknown as Parameters<typeof subject.getId>)).toEqual(3);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"id\":0}] gives 0", async () => {
 const args: unknown[] = [{"id":0}];
 const before = structuredClone(args);
 expect(await subject.getId(...args as unknown as Parameters<typeof subject.getId>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

