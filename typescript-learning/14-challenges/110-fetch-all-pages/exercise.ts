export interface User {id:number;name:string}
export interface ApiPage {items:User[];totalPages:number}

export function fetchAll(fetchPage: (page:number) => Promise<ApiPage>): Promise<User[]> {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
