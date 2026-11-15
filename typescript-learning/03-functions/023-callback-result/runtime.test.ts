import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: call the supplied function once with the input', () => { const fn = vi.fn((n: number) => n + 7); expect(subject.apply(3, fn)).toBe(10); expect(fn).toHaveBeenCalledExactlyOnceWith(3); });
