export type Validation = {ok:true;user:{name:string;age:number}} | {ok:false;errors:string[]};

export function validateCreate(value: unknown): Validation {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
