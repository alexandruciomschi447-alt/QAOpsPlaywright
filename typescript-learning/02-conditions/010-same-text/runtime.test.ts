import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"Ada\",\"Ada\"] gives true", async () => {
 const args: unknown[] = ["Ada","Ada"];
 const before = structuredClone(args);
 expect(await subject.sameText(...args as unknown as Parameters<typeof subject.sameText>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"Ada\",\"ada\"] gives false", async () => {
 const args: unknown[] = ["Ada","ada"];
 const before = structuredClone(args);
 expect(await subject.sameText(...args as unknown as Parameters<typeof subject.sameText>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"\",\"\"] gives true", async () => {
 const args: unknown[] = ["",""];
 const before = structuredClone(args);
 expect(await subject.sameText(...args as unknown as Parameters<typeof subject.sameText>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

