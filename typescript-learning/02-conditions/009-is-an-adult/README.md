# 009 — Is an adult

## 1. What you are practising

A comparison produces true or false. An if statement chooses what to do. === checks equality, && means both, || means either, and ! reverses a boolean.

This exercise focuses on is an adult. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return true when age is at least 18.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `isAdult(18)` → `true`. This is the required observable result.
- `isAdult(17)` → `false`. This is the required observable result.
- `isAdult(0)` → `false`. This is the required observable result.
- `isAdult(80)` → `true`. This is the required observable result.

## 5. Rules and edge cases

Age is a non-negative integer.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 009
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
