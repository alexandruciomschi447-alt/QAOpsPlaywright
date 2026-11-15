import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [\" Ada \"] gives \"Ada\"", async () => {
 const args: unknown[] = [" Ada "];
 const before = structuredClone(args);
 expect(await subject.validateName(...args as unknown as Parameters<typeof subject.validateName>)).toEqual("Ada");
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it('requirement: custom error identity and code', () => { for (const v of ['', '  ']) { let caught: unknown; try { subject.validateName(v); } catch(e) { caught = e; } expect(caught).toBeInstanceOf(subject.ValidationError); expect(caught).toBeInstanceOf(Error); expect(caught).toMatchObject({code:'INVALID_NAME',message:'Name is required'}); } });
