import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: base behaviour', () => { expect(new subject.Animal('Milo').speak()).toBe('Milo makes a sound'); expect(new subject.Animal('').speak()).toBe(' makes a sound'); });
