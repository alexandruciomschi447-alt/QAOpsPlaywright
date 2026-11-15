# 100 — Retry an operation

## 1. What you are practising

QA means checking that software behaves as required. Backend code often validates data, selects records, and handles failures. Dependency injection means passing a service into code instead of creating it inside. Tests can then pass a fake service.

This exercise focuses on retry an operation. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Try operation until success or maxAttempts calls have failed.
2. Return the first success.
3. If exhausted, reject with the exact last error.
4. Reject invalid maxAttempts with RangeError before calling operation.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

With maxAttempts 3, a failure followed by success 7 returns 7 after two calls. Three failures reject with the third error. A limit of 0 rejects before any call.

## 5. Rules and edge cases

maxAttempts must be a positive integer. No delays or real network calls. Synchronous throws count as failed attempts.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 100
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
