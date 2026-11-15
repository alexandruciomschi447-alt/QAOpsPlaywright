export type Outcome<T> = {ok:true;value:T}|{ok:false;error:unknown};

export function runLimited<T>(tasks: Array<() => Promise<T>>, limit: number): Promise<Array<Outcome<T>>> {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
