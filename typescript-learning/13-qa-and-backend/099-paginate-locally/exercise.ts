export interface Page<T> {items:T[];page:number;pageSize:number;total:number;totalPages:number}

export function paginate<T>(items: T[], page: number, pageSize: number): Page<T> {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
