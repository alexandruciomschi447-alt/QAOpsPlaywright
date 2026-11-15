import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\"{\\\"theme\\\":\\\"dark\\\",\\\"retries\\\":2,\\\"extra\\\":1}\"] gives {\"theme\":\"dark\",\"retries\":2}", async () => {
 const args: unknown[] = ["{\"theme\":\"dark\",\"retries\":2,\"extra\":1}"];
 const before = structuredClone(args);
 expect(await subject.parseSettings(...args as unknown as Parameters<typeof subject.parseSettings>)).toEqual({"theme":"dark","retries":2});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [\"{\\\"theme\\\":\\\"light\\\",\\\"retries\\\":0}\"] gives {\"theme\":\"light\",\"retries\":0}", async () => {
 const args: unknown[] = ["{\"theme\":\"light\",\"retries\":0}"];
 const before = structuredClone(args);
 expect(await subject.parseSettings(...args as unknown as Parameters<typeof subject.parseSettings>)).toEqual({"theme":"light","retries":0});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [\"{\\\"theme\\\":\\\"dark\\\",\\\"retries\\\":6}\"] gives null", async () => {
 const args: unknown[] = ["{\"theme\":\"dark\",\"retries\":6}"];
 const before = structuredClone(args);
 expect(await subject.parseSettings(...args as unknown as Parameters<typeof subject.parseSettings>)).toEqual(null);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 4: [\"{\\\"theme\\\":\\\"blue\\\",\\\"retries\\\":1}\"] gives null", async () => {
 const args: unknown[] = ["{\"theme\":\"blue\",\"retries\":1}"];
 const before = structuredClone(args);
 expect(await subject.parseSettings(...args as unknown as Parameters<typeof subject.parseSettings>)).toEqual(null);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 5: [\"null\"] gives null", async () => {
 const args: unknown[] = ["null"];
 const before = structuredClone(args);
 expect(await subject.parseSettings(...args as unknown as Parameters<typeof subject.parseSettings>)).toEqual(null);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 6: [\"bad\"] gives null", async () => {
 const args: unknown[] = ["bad"];
 const before = structuredClone(args);
 expect(await subject.parseSettings(...args as unknown as Parameters<typeof subject.parseSettings>)).toEqual(null);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 7: [\"[]\"] gives null", async () => {
 const args: unknown[] = ["[]"];
 const before = structuredClone(args);
 expect(await subject.parseSettings(...args as unknown as Parameters<typeof subject.parseSettings>)).toEqual(null);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 8: [\"{\\\"theme\\\":\\\"dark\\\",\\\"retries\\\":1.5}\"] gives null", async () => {
 const args: unknown[] = ["{\"theme\":\"dark\",\"retries\":1.5}"];
 const before = structuredClone(args);
 expect(await subject.parseSettings(...args as unknown as Parameters<typeof subject.parseSettings>)).toEqual(null);
 expect(args, 'input values must remain unchanged').toEqual(before);
});

