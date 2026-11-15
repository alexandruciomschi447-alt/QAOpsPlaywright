# 087 — Injected delay

## 1. What you are practising

A Promise represents work that finishes later. async functions return promises. await waits for a promise inside an async function. A rejected promise is handled with try/catch around await. Tests supply fake dependencies so no real network is needed.

This exercise focuses on injected delay. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Call sleep once with milliseconds.
2. Return value only after sleep resolves.
3. Propagate sleep failures.
4. The caller supplies the timer.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

With value "ready" and milliseconds 20, sleep receives 20 once. The result is "ready" only after sleep resolves.

## 5. Rules and edge cases

Milliseconds is non-negative. Do not use real timers. Preserve reference identity.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 087
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
