# 046 — String type guard

## 1. What you are practising

A union such as string | number permits either type. A literal type permits one exact value. Narrowing uses a check to learn which type a value has. A type guard returns a boolean and tells TypeScript what a successful check means.

This exercise focuses on string type guard. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return true exactly when value is a primitive string.
2. Keep the type predicate in the return signature.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `isString("")` → `true`. This is the required observable result.
- `isString(3)` → `false`. This is the required observable result.
- `isString(null)` → `false`. This is the required observable result.
- `isString({})` → `false`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 046
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
