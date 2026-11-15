export type ImportResult = {ok:true;users:Array<{id:number;name:string}>;rejected:number}|{ok:false;error:"Invalid input"};

export function importUsers(text: string): ImportResult {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
