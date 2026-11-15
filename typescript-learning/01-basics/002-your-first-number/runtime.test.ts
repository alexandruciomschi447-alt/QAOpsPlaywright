import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [] gives 10", async () => {
 const args: unknown[] = [];
 const before = structuredClone(args);
 expect(await subject.startingScore(...args as unknown as Parameters<typeof subject.startingScore>)).toEqual(10);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

