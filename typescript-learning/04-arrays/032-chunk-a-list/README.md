# 032 — Chunk a list

## 1. What you are practising

An array is an ordered list. A loop repeats work. map creates changed values, filter keeps matching values, and reduce combines values. These methods receive callback functions. A new array should not change the old one.

This exercise focuses on chunk a list. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Split values into consecutive groups with at most size values each.
2. Return an empty list for an empty input.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `chunk([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]`. This is the required observable result.
- `chunk([], 3)` → `[]`. This is the required observable result.
- `chunk([1,2], 5)` → `[[1,2]]`. This is the required observable result.

## 5. Rules and edge cases

Size is a positive integer. Preserve order and do not mutate inputs.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 032
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
