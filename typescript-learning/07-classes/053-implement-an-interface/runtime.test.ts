import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: formatting', () => { const f = new subject.UpperFormatter(); expect(f.format('Ada')).toBe('ADA'); expect(f.format('')).toBe(''); });
