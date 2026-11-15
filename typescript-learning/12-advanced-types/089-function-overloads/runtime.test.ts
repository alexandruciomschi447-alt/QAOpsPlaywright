import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"12\"] gives 12", async () => {
 const args: unknown[] = ["12"];
 const before = structuredClone(args);
 expect(await subject.convert(...args as unknown as Parameters<typeof subject.convert>)).toEqual(12);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [12] gives \"12\"", async () => {
 const args: unknown[] = [12];
 const before = structuredClone(args);
 expect(await subject.convert(...args as unknown as Parameters<typeof subject.convert>)).toEqual("12");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"\"] gives 0", async () => {
 const args: unknown[] = [""];
 const before = structuredClone(args);
 expect(await subject.convert(...args as unknown as Parameters<typeof subject.convert>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [0] gives \"0\"", async () => {
 const args: unknown[] = [0];
 const before = structuredClone(args);
 expect(await subject.convert(...args as unknown as Parameters<typeof subject.convert>)).toEqual("0");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

