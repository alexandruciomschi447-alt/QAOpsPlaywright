import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[{\"id\":2,\"name\":\"B\",\"active\":false},{\"id\":1,\"name\":\"A\",\"active\":true}]] gives [{\"id\":1,\"name\":\"A\",\"active\":true}]", async () => {
 const args: unknown[] = [[{"id":2,"name":"B","active":false},{"id":1,"name":"A","active":true}]];
 const before = structuredClone(args);
 expect(await subject.activeUsers(...args as unknown as Parameters<typeof subject.activeUsers>)).toEqual([{"id":1,"name":"A","active":true}]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives []", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.activeUsers(...args as unknown as Parameters<typeof subject.activeUsers>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement: preserve item identity', () => { const a = {id:1,name:'A',active:true}; expect(subject.activeUsers([a])[0]).toBe(a); });
