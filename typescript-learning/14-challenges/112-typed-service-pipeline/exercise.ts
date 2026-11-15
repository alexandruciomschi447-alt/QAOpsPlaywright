export interface User {id:number;name:string}
export interface Dependencies {repository:{create(name:string):Promise<User>};audit(user:User):Promise<void>}
export type Response = {status:201;user:User}|{status:400|500;error:string};

export function execute(request: unknown, dependencies: Dependencies): Promise<Response> {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
