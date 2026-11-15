export type Event = {kind:"add";amount:number}|{kind:"reset"};
export interface State {count:number;history:number[]}

export function reduceEvents(events: Event[]): State {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
