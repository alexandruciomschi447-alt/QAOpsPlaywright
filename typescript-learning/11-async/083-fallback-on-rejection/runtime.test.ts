import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: success, empty, rejection, and synchronous throw', async () => { expect(await subject.loadOrDefault(async () => 'A', 'B')).toBe('A'); expect(await subject.loadOrDefault(async () => '', 'B')).toBe(''); expect(await subject.loadOrDefault(async () => { throw new Error('x'); }, 'B')).toBe('B'); expect(await subject.loadOrDefault(() => { throw new Error('x'); }, 'B')).toBe('B'); });
