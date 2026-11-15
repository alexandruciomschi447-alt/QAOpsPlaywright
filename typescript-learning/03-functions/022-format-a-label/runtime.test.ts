import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"Tests\",3] gives \"Tests: 3\"", async () => {
 const args: unknown[] = ["Tests",3];
 const before = structuredClone(args);
 expect(await subject.label(...args as unknown as Parameters<typeof subject.label>)).toEqual("Tests: 3");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"\",0] gives \": 0\"", async () => {
 const args: unknown[] = ["",0];
 const before = structuredClone(args);
 expect(await subject.label(...args as unknown as Parameters<typeof subject.label>)).toEqual(": 0");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

