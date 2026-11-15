# 011 — Positive or not

## 1. What you are practising

A comparison produces true or false. An if statement chooses what to do. === checks equality, && means both, || means either, and ! reverses a boolean.

This exercise focuses on positive or not. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return "positive" for values above zero, "negative" for values below zero, and "zero" for zero.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `sign(3)` → `"positive"`. This is the required observable result.
- `sign(-1)` → `"negative"`. This is the required observable result.
- `sign(0)` → `"zero"`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 011
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
