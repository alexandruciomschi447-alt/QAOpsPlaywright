# 105 — Test result report

## 1. What you are practising

These larger tasks combine the earlier topics. Break each requirement into small pieces. Check one behaviour at a time. Read the supporting types before writing code. Everything still runs locally with fake services.

This exercise focuses on test result report. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Count passed, failed, and skipped results.
2. Add durationMs for passed and failed results only.
3. Return failedNames in input order, keeping duplicates.
4. Empty input gives zero counts and duration.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `report([{"name":"a","status":"passed","durationMs":5},{"name":"b","status":"failed","durationMs":3},{"name":"c","status":"skipped","durationMs":9},{"name":"b","status":"failed","durationMs":2}])` → `{"passed":1,"failed":2,"skipped":1,"durationMs":10,"failedNames":["b","b"]}`. This is the required observable result.
- `report([])` → `{"passed":0,"failed":0,"skipped":0,"durationMs":0,"failedNames":[]}`. This is the required observable result.

## 5. Rules and edge cases

Durations are finite and non-negative. Do not mutate input. Preserve failure order.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 105
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
