export interface Response {items:Array<{id:number;name:string}>;total:number}

export function validateResponse(value: unknown): value is Response {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
