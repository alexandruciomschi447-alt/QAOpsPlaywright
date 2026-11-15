import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: exact matching including empty strings', () => { const a = new subject.Vault('Ab'); expect(a.matches('Ab')).toBe(true); expect(a.matches('ab')).toBe(false); expect(new subject.Vault('').matches('')).toBe(true); });
