import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[\"a\",\"bear\",\"cat\"],3] gives \"bear\"", async () => {
 const args: unknown[] = [["a","bear","cat"],3];
 const before = structuredClone(args);
 expect(await subject.firstLong(...args as unknown as Parameters<typeof subject.firstLong>)).toEqual("bear");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[],2] gives undefined", async () => {
 const args: unknown[] = [[],2];
 const before = structuredClone(args);
 expect(await subject.firstLong(...args as unknown as Parameters<typeof subject.firstLong>)).toEqual(undefined);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[\"a\"],4] gives undefined", async () => {
 const args: unknown[] = [["a"],4];
 const before = structuredClone(args);
 expect(await subject.firstLong(...args as unknown as Parameters<typeof subject.firstLong>)).toEqual(undefined);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [[\"\",\"a\"],0] gives \"\"", async () => {
 const args: unknown[] = [["","a"],0];
 const before = structuredClone(args);
 expect(await subject.firstLong(...args as unknown as Parameters<typeof subject.firstLong>)).toEqual("");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

