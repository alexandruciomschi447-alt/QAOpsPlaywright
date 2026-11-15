import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: wait for injected clock', async () => { let release!: () => void; const sleep = vi.fn(() => new Promise<void>(r => {release = r;})); const value = {id:1}; let finished = false; const pending = subject.waitAndReturn(value, 20, sleep).then(v => {finished = true; return v;}); await Promise.resolve(); expect(sleep).toHaveBeenCalledExactlyOnceWith(20); expect(finished).toBe(false); release(); expect(await pending).toBe(value); });
it('requirement: propagate sleep error', async () => { await expect(subject.waitAndReturn(1,0,async () => {throw new Error('clock');})).rejects.toThrow('clock'); });
