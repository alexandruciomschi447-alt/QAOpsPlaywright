# 086 — Collect outcomes

## 1. What you are practising

A Promise represents work that finishes later. async functions return promises. await waits for a promise inside an async function. A rejected promise is handled with try/catch around await. Tests supply fake dependencies so no real network is needed.

This exercise focuses on collect outcomes. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Run all tasks.
2. Return { ok:true, value } for each success and { ok:false } for each failure, in input order.
3. Handle synchronous throws too.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

One task resolving to 1 and another rejecting give [{ok:true,value:1},{ok:false}]. No tasks gives [].

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 086
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
