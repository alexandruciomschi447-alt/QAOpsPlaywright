# 023 — Callback result

## 1. What you are practising

A function is a named piece of work. A parameter is an input name in its definition. An argument is a value you pass when calling it. A return value is its result. A default parameter is used when an argument is missing or undefined.

This exercise focuses on callback result. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Call transform with value exactly once and return its result.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

`apply(3, transform)` returns 10 when the supplied transform returns 10 for input 3. The callback receives 3 once.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 023
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
