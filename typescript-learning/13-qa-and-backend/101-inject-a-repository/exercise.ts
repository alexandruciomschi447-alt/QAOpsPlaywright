export interface User {id:number;name:string}
export interface Repository {findById(id:number): Promise<User | null>}

export function findUser(repository: Repository, id: number): Promise<User | null> {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
