import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[1,2,3,4,5],2,2] gives {\"items\":[3,4],\"page\":2,\"pageSize\":2,\"total\":5,\"totalPages\":3}", async () => {
 const args: unknown[] = [[1,2,3,4,5],2,2];
 const before = structuredClone(args);
 expect(await subject.paginate(...args as unknown as Parameters<typeof subject.paginate>)).toEqual({"items":[3,4],"page":2,"pageSize":2,"total":5,"totalPages":3});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[],1,2] gives {\"items\":[],\"page\":1,\"pageSize\":2,\"total\":0,\"totalPages\":0}", async () => {
 const args: unknown[] = [[],1,2];
 const before = structuredClone(args);
 expect(await subject.paginate(...args as unknown as Parameters<typeof subject.paginate>)).toEqual({"items":[],"page":1,"pageSize":2,"total":0,"totalPages":0});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[1],3,2] gives {\"items\":[],\"page\":3,\"pageSize\":2,\"total\":1,\"totalPages\":1}", async () => {
 const args: unknown[] = [[1],3,2];
 const before = structuredClone(args);
 expect(await subject.paginate(...args as unknown as Parameters<typeof subject.paginate>)).toEqual({"items":[],"page":3,"pageSize":2,"total":1,"totalPages":1});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement: invalid paging arguments', () => { for (const bad of [0,-1,1.5,NaN,Infinity]) { expect(() => subject.paginate([],bad,2)).toThrow(RangeError); expect(() => subject.paginate([],1,bad)).toThrow(RangeError); } });
