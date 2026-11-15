# 016 — Leap year

## 1. What you are practising

A comparison produces true or false. An if statement chooses what to do. === checks equality, && means both, || means either, and ! reverses a boolean.

This exercise focuses on leap year. Earlier exercises introduce the pieces used here.

## 2. Your task

1. A year is a leap year if divisible by 400, or divisible by 4 but not by 100.
2. Return that decision.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `isLeapYear(2000)` → `true`. This is the required observable result.
- `isLeapYear(1900)` → `false`. This is the required observable result.
- `isLeapYear(2024)` → `true`. This is the required observable result.
- `isLeapYear(2023)` → `false`. This is the required observable result.

## 5. Rules and edge cases

Year is a positive integer.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 016
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
