export interface Line {sku:string;unitPrice:number;quantity:number}
export interface Summary {items:Array<{sku:string;quantity:number;subtotal:number}>;total:number}

export function basket(lines: Line[]): Summary {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
