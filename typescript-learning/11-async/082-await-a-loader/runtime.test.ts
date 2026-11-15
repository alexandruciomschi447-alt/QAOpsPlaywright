import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: await and propagate errors', async () => { const load = vi.fn().mockResolvedValue('Ada'); expect(await subject.loadName(load)).toBe('ADA'); expect(load).toHaveBeenCalledTimes(1); const error = new Error('offline'); await expect(subject.loadName(() => Promise.reject(error))).rejects.toBe(error); });
