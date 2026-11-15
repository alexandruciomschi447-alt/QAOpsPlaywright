import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[\"b\",\"a\",\"b\",\"A\",\"a\"]] gives [\"b\",\"a\",\"A\"]", async () => {
 const args: unknown[] = [["b","a","b","A","a"]];
 const before = structuredClone(args);
 expect(await subject.unique(...args as unknown as Parameters<typeof subject.unique>)).toEqual(["b","a","A"]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives []", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.unique(...args as unknown as Parameters<typeof subject.unique>)).toEqual([]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[\"\",\"\"]] gives [\"\"]", async () => {
 const args: unknown[] = [["",""]];
 const before = structuredClone(args);
 expect(await subject.unique(...args as unknown as Parameters<typeof subject.unique>)).toEqual([""]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

