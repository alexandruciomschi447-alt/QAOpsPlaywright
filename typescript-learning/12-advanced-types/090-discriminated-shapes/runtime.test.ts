import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"kind\":\"rectangle\",\"width\":3,\"height\":4}] gives 12", async () => {
 const args: unknown[] = [{"kind":"rectangle","width":3,"height":4}];
 const before = structuredClone(args);
 expect(await subject.area(...args as unknown as Parameters<typeof subject.area>)).toEqual(12);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"kind\":\"circle\",\"radius\":0}] gives 0", async () => {
 const args: unknown[] = [{"kind":"circle","radius":0}];
 const before = structuredClone(args);
 expect(await subject.area(...args as unknown as Parameters<typeof subject.area>)).toEqual(0);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [{\"kind\":\"circle\",\"radius\":2}] gives 12.566370614359172", async () => {
 const args: unknown[] = [{"kind":"circle","radius":2}];
 const before = structuredClone(args);
 expect(await subject.area(...args as unknown as Parameters<typeof subject.area>)).toEqual(12.566370614359172);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

