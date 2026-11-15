export type Result<T> = {ok:true;value:T} | {ok:false;message:string};

export function attempt<T>(task: () => Promise<T>): Promise<Result<T>> {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
