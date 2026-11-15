# 015 — Discount boundary

## 1. What you are practising

A comparison produces true or false. An if statement chooses what to do. === checks equality, && means both, || means either, and ! reverses a boolean.

This exercise focuses on discount boundary. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return 20 when total is at least 100, 10 when it is at least 50 but below 100, and 0 otherwise.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `discount(100)` → `20`. This is the required observable result.
- `discount(99)` → `10`. This is the required observable result.
- `discount(50)` → `10`. This is the required observable result.
- `discount(49)` → `0`. This is the required observable result.
- `discount(0)` → `0`. This is the required observable result.

## 5. Rules and edge cases

Total is finite and non-negative. Return the discount amount, not a percentage calculation.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 015
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
