import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: dimensions, area, and validation', () => { const a = new subject.Rectangle(3,4); expect([a.width,a.height,a.area()]).toEqual([3,4,12]); expect(new subject.Rectangle(0,4).area()).toBe(0); expect(() => new subject.Rectangle(-1,2)).toThrow(RangeError); expect(() => new subject.Rectangle(1,-2)).toThrow(RangeError); });
