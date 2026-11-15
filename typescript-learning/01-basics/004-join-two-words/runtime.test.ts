import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"Hello\",\"Ada\"] gives \"Hello Ada\"", async () => {
 const args: unknown[] = ["Hello","Ada"];
 const before = structuredClone(args);
 expect(await subject.joinWords(...args as unknown as Parameters<typeof subject.joinWords>)).toEqual("Hello Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"\",\"Ada\"] gives \" Ada\"", async () => {
 const args: unknown[] = ["","Ada"];
 const before = structuredClone(args);
 expect(await subject.joinWords(...args as unknown as Parameters<typeof subject.joinWords>)).toEqual(" Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"a\",\"\"] gives \"a \"", async () => {
 const args: unknown[] = ["a",""];
 const before = structuredClone(args);
 expect(await subject.joinWords(...args as unknown as Parameters<typeof subject.joinWords>)).toEqual("a ");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

