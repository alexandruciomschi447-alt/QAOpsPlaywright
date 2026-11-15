# 012 — Between limits

## 1. What you are practising

A comparison produces true or false. An if statement chooses what to do. === checks equality, && means both, || means either, and ! reverses a boolean.

This exercise focuses on between limits. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return true when value is between minimum and maximum, including both limits.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `inRange(3, 1, 5)` → `true`. This is the required observable result.
- `inRange(1, 1, 5)` → `true`. This is the required observable result.
- `inRange(5, 1, 5)` → `true`. This is the required observable result.
- `inRange(6, 1, 5)` → `false`. This is the required observable result.

## 5. Rules and edge cases

All values are finite. Minimum is at most maximum.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 012
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
