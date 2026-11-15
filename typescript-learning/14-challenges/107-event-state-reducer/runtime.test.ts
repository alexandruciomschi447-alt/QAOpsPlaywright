import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[{\"kind\":\"add\",\"amount\":2},{\"kind\":\"add\",\"amount\":-1},{\"kind\":\"reset\"},{\"kind\":\"add\",\"amount\":4}]] gives {\"count\":4,\"history\":[2,1,0,4]}", async () => {
 const args: unknown[] = [[{"kind":"add","amount":2},{"kind":"add","amount":-1},{"kind":"reset"},{"kind":"add","amount":4}]];
 const before = structuredClone(args);
 expect(await subject.reduceEvents(...args as unknown as Parameters<typeof subject.reduceEvents>)).toEqual({"count":4,"history":[2,1,0,4]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives {\"count\":0,\"history\":[]}", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.reduceEvents(...args as unknown as Parameters<typeof subject.reduceEvents>)).toEqual({"count":0,"history":[]});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

