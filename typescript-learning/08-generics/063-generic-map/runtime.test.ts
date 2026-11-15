import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: generic transformation and empty input', () => { const fn = vi.fn((n: number) => String(n)); expect(subject.mapValues([2,1], fn)).toEqual(['2','1']); expect(fn.mock.calls).toEqual([[2],[1]]); expect(subject.mapValues([], fn)).toEqual([]); expect(fn).toHaveBeenCalledTimes(2); });
