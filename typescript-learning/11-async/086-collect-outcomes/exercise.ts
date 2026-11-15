export type Outcome = {ok:true; value:number} | {ok:false};

export function settle(tasks: Array<() => Promise<number>>): Promise<Outcome[]> {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
