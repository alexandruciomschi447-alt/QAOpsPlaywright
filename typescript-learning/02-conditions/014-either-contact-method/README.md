# 014 — Either contact method

## 1. What you are practising

A comparison produces true or false. An if statement chooses what to do. === checks equality, && means both, || means either, and ! reverses a boolean.

This exercise focuses on either contact method. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return true when at least one string is not empty.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `hasContact("", "")` → `false`. This is the required observable result.
- `hasContact("a@b", "")` → `true`. This is the required observable result.
- `hasContact("", "123")` → `true`. This is the required observable result.
- `hasContact("a", "b")` → `true`. This is the required observable result.

## 5. Rules and edge cases

Only the empty string counts as missing. Do not trim spaces.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 014
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
