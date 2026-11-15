import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [{\"name\":\"Ada\",\"age\":30},\"name\"] gives \"Ada\"", async () => {
 const args: unknown[] = [{"name":"Ada","age":30},"name"];
 const before = structuredClone(args);
 expect(await subject.getProperty(...args as unknown as Parameters<typeof subject.getProperty>)).toEqual("Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [{\"name\":\"Ada\",\"age\":30},\"age\"] gives 30", async () => {
 const args: unknown[] = [{"name":"Ada","age":30},"age"];
 const before = structuredClone(args);
 expect(await subject.getProperty(...args as unknown as Parameters<typeof subject.getProperty>)).toEqual(30);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

