import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [2] gives 2", async () => {
 const args: unknown[] = [2];
 const before = structuredClone(args);
 expect(await subject.positive(...args as unknown as Parameters<typeof subject.positive>)).toEqual(2);
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement 2: reject non-positive input [0]', () => { expect(() => subject.positive(0)).toThrow(new RangeError('Must be positive')); });
it('requirement 3: reject non-positive input [-1]', () => { expect(() => subject.positive(-1)).toThrow(new RangeError('Must be positive')); });

