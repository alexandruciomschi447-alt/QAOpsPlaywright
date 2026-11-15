# 107 — Event state reducer

## 1. What you are practising

These larger tasks combine the earlier topics. Break each requirement into small pieces. Check one behaviour at a time. Read the supporting types before writing code. Everything still runs locally with fake services.

This exercise focuses on event state reducer. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Start with count 0 and empty history.
2. An add event adds amount to count and appends the new count to history.
3. A reset event sets count to 0 and appends 0.
4. Empty input returns the starting state.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `reduceEvents([{"kind":"add","amount":2},{"kind":"add","amount":-1},{"kind":"reset"},{"kind":"add","amount":4}])` → `{"count":4,"history":[2,1,0,4]}`. This is the required observable result.
- `reduceEvents([])` → `{"count":0,"history":[]}`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 107
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
