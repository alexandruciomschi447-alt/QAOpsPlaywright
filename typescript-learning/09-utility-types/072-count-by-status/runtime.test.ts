import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[\"pass\",\"fail\",\"pass\"]] gives {\"pass\":2,\"fail\":1}", async () => {
 const args: unknown[] = [["pass","fail","pass"]];
 const before = structuredClone(args);
 expect(await subject.countStatuses(...args as unknown as Parameters<typeof subject.countStatuses>)).toEqual({"pass":2,"fail":1});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives {\"pass\":0,\"fail\":0}", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.countStatuses(...args as unknown as Parameters<typeof subject.countStatuses>)).toEqual({"pass":0,"fail":0});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

