

export interface Entity {id:number}
export class MemoryRepository<T extends Entity> {
  // TODO: keep private per-instance storage
  save(entity:T): void { throw new Error("Not implemented"); }
  find(id:number): T | undefined { throw new Error("Not implemented"); }
  all(): T[] { throw new Error("Not implemented"); }
  remove(id:number): boolean { throw new Error("Not implemented"); }
}
