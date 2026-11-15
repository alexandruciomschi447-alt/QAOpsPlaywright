import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [] gives true", async () => {
 const args: unknown[] = [];
 const before = structuredClone(args);
 expect(await subject.isLearning(...args as unknown as Parameters<typeof subject.isLearning>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

