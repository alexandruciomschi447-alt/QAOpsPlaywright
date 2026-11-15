import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"items\":[{\"id\":1,\"name\":\"A\"}],\"total\":1}] gives true", async () => {
 const args: unknown[] = [{"items":[{"id":1,"name":"A"}],"total":1}];
 const before = structuredClone(args);
 expect(await subject.validateResponse(...args as unknown as Parameters<typeof subject.validateResponse>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"items\":[],\"total\":0}] gives true", async () => {
 const args: unknown[] = [{"items":[],"total":0}];
 const before = structuredClone(args);
 expect(await subject.validateResponse(...args as unknown as Parameters<typeof subject.validateResponse>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [{\"items\":[{\"id\":\"1\",\"name\":\"A\"}],\"total\":1}] gives false", async () => {
 const args: unknown[] = [{"items":[{"id":"1","name":"A"}],"total":1}];
 const before = structuredClone(args);
 expect(await subject.validateResponse(...args as unknown as Parameters<typeof subject.validateResponse>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [{\"items\":[],\"total\":-1}] gives false", async () => {
 const args: unknown[] = [{"items":[],"total":-1}];
 const before = structuredClone(args);
 expect(await subject.validateResponse(...args as unknown as Parameters<typeof subject.validateResponse>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 5: [{\"items\":[{\"id\":1,\"name\":\"A\"}],\"total\":0}] gives false", async () => {
 const args: unknown[] = [{"items":[{"id":1,"name":"A"}],"total":0}];
 const before = structuredClone(args);
 expect(await subject.validateResponse(...args as unknown as Parameters<typeof subject.validateResponse>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 6: [null] gives false", async () => {
 const args: unknown[] = [null];
 const before = structuredClone(args);
 expect(await subject.validateResponse(...args as unknown as Parameters<typeof subject.validateResponse>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 7: [{\"items\":[],\"total\":1.5}] gives false", async () => {
 const args: unknown[] = [{"items":[],"total":1.5}];
 const before = structuredClone(args);
 expect(await subject.validateResponse(...args as unknown as Parameters<typeof subject.validateResponse>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 8: [{\"items\":[null],\"total\":1}] gives false", async () => {
 const args: unknown[] = [{"items":[null],"total":1}];
 const before = structuredClone(args);
 expect(await subject.validateResponse(...args as unknown as Parameters<typeof subject.validateResponse>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

