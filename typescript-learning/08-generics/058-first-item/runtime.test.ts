import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[1,2]] gives 1", async () => {
 const args: unknown[] = [[1,2]];
 const before = structuredClone(args);
 expect(await subject.first(...args as unknown as Parameters<typeof subject.first>)).toEqual(1);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives undefined", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.first(...args as unknown as Parameters<typeof subject.first>)).toEqual(undefined);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[\"a\",\"b\"]] gives \"a\"", async () => {
 const args: unknown[] = [["a","b"]];
 const before = structuredClone(args);
 expect(await subject.first(...args as unknown as Parameters<typeof subject.first>)).toEqual("a");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

