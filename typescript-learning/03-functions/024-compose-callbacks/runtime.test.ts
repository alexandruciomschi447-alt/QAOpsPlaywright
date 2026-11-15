import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: preserve callback order and intermediate values', () => { const first = vi.fn((n: number) => n * 2); const second = vi.fn((n: number) => 'value=' + n); expect(subject.compose(4, first, second)).toBe('value=8'); expect(first).toHaveBeenCalledExactlyOnceWith(4); expect(second).toHaveBeenCalledExactlyOnceWith(8); });
