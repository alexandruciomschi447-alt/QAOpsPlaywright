# 096 — Exhaustive checking

## 1. What you are practising

An overload gives one function different call signatures. A discriminated union uses a shared literal property to identify each case. A mapped type visits each property key. A conditional type chooses a type with extends. never represents an impossible value and helps check every union case.

This exercise focuses on exhaustive checking. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return "Not started", "Working", or "Finished" for idle, running, or done.
2. Define exported assertNever(value: never): never that throws Error("Unexpected state").
3. Call it in the unreachable branch so a future union member causes a type error.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `stateLabel({"kind":"idle"})` → `"Not started"`. This is the required observable result.
- `stateLabel({"kind":"running"})` → `"Working"`. This is the required observable result.
- `stateLabel({"kind":"done"})` → `"Finished"`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 096
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
