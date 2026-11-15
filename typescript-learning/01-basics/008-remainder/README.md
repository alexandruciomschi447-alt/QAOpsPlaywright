# 008 — Remainder

## 1. What you are practising

A variable is a named value. Use const for a value you do not reassign and let for one you change. string means text, number means a number, and boolean means true or false. Operators such as +, -, * and / combine values.

This exercise focuses on remainder. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return the remainder after dividing value by divisor.
2. The % operator gives a remainder.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `remainder(10, 3)` → `1`. This is the required observable result.
- `remainder(9, 3)` → `0`. This is the required observable result.
- `remainder(-7, 3)` → `-1`. This is the required observable result.

## 5. Rules and edge cases

Both inputs are integers. Divisor is positive. Negative values use JavaScript remainder rules.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 008
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
