import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: start together, preserve order', async () => { let release!: (n: number) => void; const a = vi.fn(() => new Promise<number>(resolve => { release = resolve; })); const b = vi.fn(async () => 2); const pending = subject.parallel([a,b]); await Promise.resolve(); expect(a).toHaveBeenCalledTimes(1); expect(b).toHaveBeenCalledTimes(1); release(1); expect(await pending).toEqual([1,2]); expect(await subject.parallel([])).toEqual([]); });
it('requirement: propagate rejection', async () => { await expect(subject.parallel([async () => {throw new Error('x');}])).rejects.toThrow('x'); });
