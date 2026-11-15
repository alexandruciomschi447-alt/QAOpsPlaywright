import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: default and independent counters', () => { const a = new subject.Counter(); const b = new subject.Counter(-2); a.increment(); a.increment(); expect(a.value()).toBe(2); expect(b.value()).toBe(-2); b.increment(); expect(b.value()).toBe(-1); });
