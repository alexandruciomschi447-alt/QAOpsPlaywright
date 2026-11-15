export type ParseResult = { ok: true; value: unknown } | { ok: false; error: "Invalid JSON" };

export function parseJson(text: string): ParseResult {
  // TODO: implement the requirements in README.md
  throw new Error("Not implemented");
}
