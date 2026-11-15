import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"Ada\"] gives \"App: Ada\"", async () => {
 const args: unknown[] = ["Ada"];
 const before = structuredClone(args);
 expect(await subject.appLabel(...args as unknown as Parameters<typeof subject.appLabel>)).toEqual("App: Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"\"] gives \"App: \"", async () => {
 const args: unknown[] = [""];
 const before = structuredClone(args);
 expect(await subject.appLabel(...args as unknown as Parameters<typeof subject.appLabel>)).toEqual("App: ");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement: module contract', async () => { const { PREFIX } = await import('./constants'); expect(PREFIX).toBe('App: '); });
