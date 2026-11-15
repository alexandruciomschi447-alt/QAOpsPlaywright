import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: stop on first success', async () => { const op = vi.fn().mockRejectedValueOnce(new Error('first')).mockResolvedValueOnce(7); expect(await subject.retry(op,3)).toBe(7); expect(op).toHaveBeenCalledTimes(2); });
it('requirement: exhaust attempts and preserve last error', async () => { const error = new Error('last'); const op = vi.fn(() => {throw error;}); await expect(subject.retry(op,2)).rejects.toBe(error); expect(op).toHaveBeenCalledTimes(2); });
it('requirement: invalid attempt limit', async () => { for (const n of [0,-1,1.5,Infinity,NaN]) { const op = vi.fn(async () => 1); await expect(subject.retry(op,n)).rejects.toThrow(RangeError); expect(op).not.toHaveBeenCalled(); } });
