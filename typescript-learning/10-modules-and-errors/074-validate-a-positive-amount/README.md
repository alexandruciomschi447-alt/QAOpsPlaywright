# 074 — Validate a positive amount

## 1. What you are practising

export makes a value available to another file; import reads it. Throwing an Error stops normal work until a catch handles it. unknown is safer than any because you must check it. JSON.parse can throw and can return values with unexpected shapes.

This exercise focuses on validate a positive amount. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return value if strictly positive.
2. Otherwise throw RangeError with message "Must be positive".

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `positive(2)` → `2`. This is the required observable result.
- `positive(0)` → `throws RangeError("Must be positive")`. This is the required observable result.
- `positive(-1)` → `throws RangeError("Must be positive")`. This is the required observable result.

## 5. Rules and edge cases

Inputs are finite. Cases with zero or negative inputs expect RangeError, not null.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 074
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
