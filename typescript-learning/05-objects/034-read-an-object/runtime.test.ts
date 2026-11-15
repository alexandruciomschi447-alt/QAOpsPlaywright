import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"name\":\"Ada\",\"age\":30}] gives \"Ada (30)\"", async () => {
 const args: unknown[] = [{"name":"Ada","age":30}];
 const before = structuredClone(args);
 expect(await subject.personLabel(...args as unknown as Parameters<typeof subject.personLabel>)).toEqual("Ada (30)");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"name\":\"\",\"age\":0}] gives \" (0)\"", async () => {
 const args: unknown[] = [{"name":"","age":0}];
 const before = structuredClone(args);
 expect(await subject.personLabel(...args as unknown as Parameters<typeof subject.personLabel>)).toEqual(" (0)");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

