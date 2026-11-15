import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: preserve results and normalize unknown failures', async () => { expect(await subject.attempt(async () => 0)).toEqual({ok:true,value:0}); expect(await subject.attempt(async () => {throw new Error('offline');})).toEqual({ok:false,message:'offline'}); expect(await subject.attempt(async () => {throw 'bad';})).toEqual({ok:false,message:'Unknown error'}); expect(await subject.attempt(() => {throw null;})).toEqual({ok:false,message:'Unknown error'}); });
