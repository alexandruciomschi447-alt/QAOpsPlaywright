# 027 — Double a list

## 1. What you are practising

An array is an ordered list. A loop repeats work. map creates changed values, filter keeps matching values, and reduce combines values. These methods receive callback functions. A new array should not change the old one.

This exercise focuses on double a list. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return a new list containing twice each number in the same order.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `doubleAll([1,-2,0])` → `[2,-4,0]`. This is the required observable result.
- `doubleAll([])` → `[]`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 027
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
