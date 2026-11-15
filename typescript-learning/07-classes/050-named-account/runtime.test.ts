import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: account state and invalid deposits', () => { const a = new subject.Account('Ada', 10); expect(a.name).toBe('Ada'); a.deposit(5); a.deposit(0); expect(a.balance()).toBe(15); expect(() => a.deposit(-1)).toThrow(RangeError); expect(a.balance()).toBe(15); });
