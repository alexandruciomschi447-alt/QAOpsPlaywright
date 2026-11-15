import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: inheritance and overridden method', () => { const d = new subject.Dog('Rex'); expect(d).toBeInstanceOf(subject.Animal); expect(d.speak()).toBe('Rex barks'); expect(new subject.Dog('').speak()).toBe(' barks'); });
