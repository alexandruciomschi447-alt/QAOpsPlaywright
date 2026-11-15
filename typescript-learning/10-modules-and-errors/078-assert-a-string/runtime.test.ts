import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: acceptance and rejection', () => { expect(() => subject.assertString('')).not.toThrow(); for (const v of [null, 1, {}, []]) expect(() => subject.assertString(v)).toThrow(new TypeError('Expected string')); });
