import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [2000] gives true", async () => {
 const args: unknown[] = [2000];
 const before = structuredClone(args);
 expect(await subject.isLeapYear(...args as unknown as Parameters<typeof subject.isLeapYear>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [1900] gives false", async () => {
 const args: unknown[] = [1900];
 const before = structuredClone(args);
 expect(await subject.isLeapYear(...args as unknown as Parameters<typeof subject.isLeapYear>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [2024] gives true", async () => {
 const args: unknown[] = [2024];
 const before = structuredClone(args);
 expect(await subject.isLeapYear(...args as unknown as Parameters<typeof subject.isLeapYear>)).toEqual(true);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [2023] gives false", async () => {
 const args: unknown[] = [2023];
 const before = structuredClone(args);
 expect(await subject.isLeapYear(...args as unknown as Parameters<typeof subject.isLeapYear>)).toEqual(false);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

