# 029 — First matching word

## 1. What you are practising

An array is an ordered list. A loop repeats work. map creates changed values, filter keeps matching values, and reduce combines values. These methods receive callback functions. A new array should not change the old one.

This exercise focuses on first matching word. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return the first word whose length is at least minimum.
2. Return undefined if none matches.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `firstLong(["a","bear","cat"], 3)` → `"bear"`. This is the required observable result.
- `firstLong([], 2)` → `undefined`. This is the required observable result.
- `firstLong(["a"], 4)` → `undefined`. This is the required observable result.
- `firstLong(["","a"], 0)` → `""`. This is the required observable result.

## 5. Rules and edge cases

Minimum is a non-negative integer. Preserve word case.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 029
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
