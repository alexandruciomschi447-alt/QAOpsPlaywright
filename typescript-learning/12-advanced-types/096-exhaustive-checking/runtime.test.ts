import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"kind\":\"idle\"}] gives \"Not started\"", async () => {
 const args: unknown[] = [{"kind":"idle"}];
 const before = structuredClone(args);
 expect(await subject.stateLabel(...args as unknown as Parameters<typeof subject.stateLabel>)).toEqual("Not started");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"kind\":\"running\"}] gives \"Working\"", async () => {
 const args: unknown[] = [{"kind":"running"}];
 const before = structuredClone(args);
 expect(await subject.stateLabel(...args as unknown as Parameters<typeof subject.stateLabel>)).toEqual("Working");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [{\"kind\":\"done\"}] gives \"Finished\"", async () => {
 const args: unknown[] = [{"kind":"done"}];
 const before = structuredClone(args);
 expect(await subject.stateLabel(...args as unknown as Parameters<typeof subject.stateLabel>)).toEqual("Finished");
 expect(args, 'input values must remain unchanged').toEqual(before);
});

