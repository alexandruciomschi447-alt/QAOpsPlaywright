# 020 — Default tax

## 1. What you are practising

A function is a named piece of work. A parameter is an input name in its definition. An argument is a value you pass when calling it. A return value is its result. A default parameter is used when an argument is missing or undefined.

This exercise focuses on default tax. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return price plus price multiplied by rate.
2. Use 0.2 when rate is omitted.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `withTax(100)` → `120`. This is the required observable result.
- `withTax(100, 0)` → `100`. This is the required observable result.
- `withTax(50, 0.1)` → `55`. This is the required observable result.
- `withTax(0)` → `0`. This is the required observable result.

## 5. Rules and edge cases

Inputs are finite and non-negative. No rounding is required.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 020
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
