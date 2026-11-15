import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: delegate and preserve results', async () => { const user = {id:1,name:'A'}; const findById = vi.fn().mockResolvedValue(user); expect(await subject.findUser({findById},1)).toBe(user); expect(findById).toHaveBeenCalledExactlyOnceWith(1); expect(await subject.findUser({findById:async () => null},2)).toBeNull(); const e = new Error('db'); await expect(subject.findUser({findById:async () => {throw e;}},1)).rejects.toBe(e); });
