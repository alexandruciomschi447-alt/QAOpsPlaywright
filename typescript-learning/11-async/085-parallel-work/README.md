# 085 — Parallel work

## 1. What you are practising

A Promise represents work that finishes later. async functions return promises. await waits for a promise inside an async function. A rejected promise is handled with try/catch around await. Tests supply fake dependencies so no real network is needed.

This exercise focuses on parallel work. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Start every task before waiting for results.
2. Return results in input order even if completion order differs.
3. Reject if a task rejects.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

Tasks resolving to 1 and 2 give [1, 2], even when the second finishes first. No tasks gives [].

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 085
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
