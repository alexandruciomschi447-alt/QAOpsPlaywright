import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"x\":1,\"y\":2},3,-2] gives {\"x\":4,\"y\":0}", async () => {
 const args: unknown[] = [{"x":1,"y":2},3,-2];
 const before = structuredClone(args);
 expect(await subject.move(...args as unknown as Parameters<typeof subject.move>)).toEqual({"x":4,"y":0});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"x\":0,\"y\":0},0,0] gives {\"x\":0,\"y\":0}", async () => {
 const args: unknown[] = [{"x":0,"y":0},0,0];
 const before = structuredClone(args);
 expect(await subject.move(...args as unknown as Parameters<typeof subject.move>)).toEqual({"x":0,"y":0});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

