# 104 — Retry with backoff

## 1. What you are practising

QA means checking that software behaves as required. Backend code often validates data, selects records, and handles failures. Dependency injection means passing a service into code instead of creating it inside. Tests can then pass a fake service.

This exercise focuses on retry with backoff. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Retry up to maxAttempts.
2. Between failed attempts wait baseMs * 2 ** retryIndex, where retryIndex starts at 0.
3. Do not sleep after the last failure or after success.
4. Reject invalid limits or a non-finite or negative baseMs with RangeError before calling dependencies.
5. Propagate the last operation error, or a sleep error immediately.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

With baseMs 10, two failures then success 9 cause sleeps of 10 and 20, and return 9. No sleep follows success. With two allowed attempts and two failures, sleep only once.

## 5. Rules and edge cases

Use only injected sleep. maxAttempts is a positive integer. baseMs may be zero or fractional.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 104
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
