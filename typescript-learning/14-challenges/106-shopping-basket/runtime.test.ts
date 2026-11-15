import { it, expect, vi } from 'vitest';
import * as subject from './exercise';
it("requirement 1: [[{\"sku\":\"a\",\"unitPrice\":100,\"quantity\":2},{\"sku\":\"b\",\"unitPrice\":50,\"quantity\":1},{\"sku\":\"a\",\"unitPrice\":100,\"quantity\":3}]] gives {\"items\":[{\"sku\":\"a\",\"quantity\":5,\"subtotal\":500},{\"sku\":\"b\",\"quantity\":1,\"subtotal\":50}],\"total\":550}", async () => {
 const args: unknown[] = [[{"sku":"a","unitPrice":100,"quantity":2},{"sku":"b","unitPrice":50,"quantity":1},{"sku":"a","unitPrice":100,"quantity":3}]];
 const before = structuredClone(args);
 expect(await subject.basket(...args as unknown as Parameters<typeof subject.basket>)).toEqual({"items":[{"sku":"a","quantity":5,"subtotal":500},{"sku":"b","quantity":1,"subtotal":50}],"total":550});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 2: [[]] gives {\"items\":[],\"total\":0}", async () => {
 const args: unknown[] = [[]];
 const before = structuredClone(args);
 expect(await subject.basket(...args as unknown as Parameters<typeof subject.basket>)).toEqual({"items":[],"total":0});
 expect(args, 'input values must remain unchanged').toEqual(before);
});
it("requirement 3: [[{\"sku\":\"z\",\"unitPrice\":20,\"quantity\":0}]] gives {\"items\":[{\"sku\":\"z\",\"quantity\":0,\"subtotal\":0}],\"total\":0}", async () => {
 const args: unknown[] = [[{"sku":"z","unitPrice":20,"quantity":0}]];
 const before = structuredClone(args);
 expect(await subject.basket(...args as unknown as Parameters<typeof subject.basket>)).toEqual({"items":[{"sku":"z","quantity":0,"subtotal":0}],"total":0});
 expect(args, 'input values must remain unchanged').toEqual(before);
});

