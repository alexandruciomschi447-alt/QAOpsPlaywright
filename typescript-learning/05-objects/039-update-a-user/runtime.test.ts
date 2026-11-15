import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"id\":1,\"name\":\"A\",\"active\":true},\"B\"] gives {\"id\":1,\"name\":\"B\",\"active\":true}", async () => {
 const args: unknown[] = [{"id":1,"name":"A","active":true},"B"];
 const before = structuredClone(args);
 expect(await subject.rename(...args as unknown as Parameters<typeof subject.rename>)).toEqual({"id":1,"name":"B","active":true});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"id\":0,\"name\":\"A\",\"active\":false},\"\"] gives {\"id\":0,\"name\":\"\",\"active\":false}", async () => {
 const args: unknown[] = [{"id":0,"name":"A","active":false},""];
 const before = structuredClone(args);
 expect(await subject.rename(...args as unknown as Parameters<typeof subject.rename>)).toEqual({"id":0,"name":"","active":false});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

