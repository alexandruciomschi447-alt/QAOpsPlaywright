export type State = {kind:"idle"} | {kind:"running"} | {kind:"done"};
// TODO: define assertNever

export function stateLabel(state: State): string {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
