import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[{\"name\":\"a\",\"status\":\"passed\",\"durationMs\":5},{\"name\":\"b\",\"status\":\"failed\",\"durationMs\":3},{\"name\":\"c\",\"status\":\"skipped\",\"durationMs\":9},{\"name\":\"b\",\"status\":\"failed\",\"durationMs\":2}]] gives {\"passed\":1,\"failed\":2,\"skipped\":1,\"durationMs\":10,\"failedNames\":[\"b\",\"b\"]}", async () => {
 const args: unknown[] = [[{"name":"a","status":"passed","durationMs":5},{"name":"b","status":"failed","durationMs":3},{"name":"c","status":"skipped","durationMs":9},{"name":"b","status":"failed","durationMs":2}]];
 const before = structuredClone(args);
 expect(await subject.report(...args as unknown as Parameters<typeof subject.report>)).toEqual({"passed":1,"failed":2,"skipped":1,"durationMs":10,"failedNames":["b","b"]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives {\"passed\":0,\"failed\":0,\"skipped\":0,\"durationMs\":0,\"failedNames\":[]}", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.report(...args as unknown as Parameters<typeof subject.report>)).toEqual({"passed":0,"failed":0,"skipped":0,"durationMs":0,"failedNames":[]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

