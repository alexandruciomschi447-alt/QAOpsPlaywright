import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: factory and conversion', () => { const t = subject.Temperature.fromCelsius(0); expect(t).toBeInstanceOf(subject.Temperature); expect(t.celsius).toBe(0); expect(t.fahrenheit()).toBe(32); expect(subject.Temperature.fromCelsius(100).fahrenheit()).toBe(212); expect(subject.Temperature.fromCelsius(-40).fahrenheit()).toBe(-40); });
