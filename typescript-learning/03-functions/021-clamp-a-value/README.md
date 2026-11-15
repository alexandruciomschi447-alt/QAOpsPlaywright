# 021 — Clamp a value

## 1. What you are practising

A function is a named piece of work. A parameter is an input name in its definition. An argument is a value you pass when calling it. A return value is its result. A default parameter is used when an argument is missing or undefined.

This exercise focuses on clamp a value. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return the nearest limit if value is outside the range.
2. Return value if it is inside.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `clamp(5, 1, 10)` → `5`. This is the required observable result.
- `clamp(-3, 1, 10)` → `1`. This is the required observable result.
- `clamp(12, 1, 10)` → `10`. This is the required observable result.
- `clamp(2, 2, 2)` → `2`. This is the required observable result.

## 5. Rules and edge cases

Minimum is at most maximum. Inputs are finite.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 021
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
