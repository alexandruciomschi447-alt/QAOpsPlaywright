import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [null] gives \"Unknown error\"", async () => {
 const args: unknown[] = [null];
 const before = structuredClone(args);
 expect(await subject.errorMessage(...args as unknown as Parameters<typeof subject.errorMessage>)).toEqual("Unknown error");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"oops\"] gives \"Unknown error\"", async () => {
 const args: unknown[] = ["oops"];
 const before = structuredClone(args);
 expect(await subject.errorMessage(...args as unknown as Parameters<typeof subject.errorMessage>)).toEqual("Unknown error");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [{\"message\":\"fake\"}] gives \"Unknown error\"", async () => {
 const args: unknown[] = [{"message":"fake"}];
 const before = structuredClone(args);
 expect(await subject.errorMessage(...args as unknown as Parameters<typeof subject.errorMessage>)).toEqual("Unknown error");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement: real Error message', () => { expect(subject.errorMessage(new Error('offline'))).toBe('offline'); expect(subject.errorMessage(new Error(''))).toBe(''); });
