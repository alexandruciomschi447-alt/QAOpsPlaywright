import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [1,\"a\"] gives [1,\"a\"]", async () => {
 const args: unknown[] = [1,"a"];
 const before = structuredClone(args);
 expect(await subject.pair(...args as unknown as Parameters<typeof subject.pair>)).toEqual([1,"a"]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [false,0] gives [false,0]", async () => {
 const args: unknown[] = [false,0];
 const before = structuredClone(args);
 expect(await subject.pair(...args as unknown as Parameters<typeof subject.pair>)).toEqual([false,0]);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

