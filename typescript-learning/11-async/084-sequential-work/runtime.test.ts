import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: sequential calls and empty input', async () => { const events: string[] = []; const a = async () => { events.push('a-start'); await Promise.resolve(); events.push('a-end'); return 1; }; const b = async () => { events.push('b'); return 2; }; expect(await subject.sequence([a,b])).toEqual([1,2]); expect(events).toEqual(['a-start','a-end','b']); expect(await subject.sequence([])).toEqual([]); });
it('requirement: stop after rejection', async () => { const later = vi.fn(async () => 3); await expect(subject.sequence([async () => { throw new Error('stop'); },later])).rejects.toThrow('stop'); expect(later).not.toHaveBeenCalled(); });
