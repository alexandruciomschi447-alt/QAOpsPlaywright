import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"Ada\"] gives \"Ada\"", async () => {
 const args: unknown[] = ["Ada"];
 const before = structuredClone(args);
 expect(await subject.asText(...args as unknown as Parameters<typeof subject.asText>)).toEqual("Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [12] gives \"12\"", async () => {
 const args: unknown[] = [12];
 const before = structuredClone(args);
 expect(await subject.asText(...args as unknown as Parameters<typeof subject.asText>)).toEqual("12");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [0] gives \"0\"", async () => {
 const args: unknown[] = [0];
 const before = structuredClone(args);
 expect(await subject.asText(...args as unknown as Parameters<typeof subject.asText>)).toEqual("0");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [\"\"] gives \"\"", async () => {
 const args: unknown[] = [""];
 const before = structuredClone(args);
 expect(await subject.asText(...args as unknown as Parameters<typeof subject.asText>)).toEqual("");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

