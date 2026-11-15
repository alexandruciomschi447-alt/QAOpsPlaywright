import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [] gives \"Hello, TypeScript!\"", async () => {
 const args: unknown[] = [];
 const before = structuredClone(args);
 expect(await subject.greeting(...args as unknown as Parameters<typeof subject.greeting>)).toEqual("Hello, TypeScript!");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

