import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it('requirement: mixed outcomes', async () => { expect(await subject.settle([async () => 1, async () => {throw new Error('x');}, () => {throw new Error('sync');}])).toEqual([{ok:true,value:1},{ok:false},{ok:false}]); expect(await subject.settle([])).toEqual([]); });
