# 111 — Bounded concurrency

## 1. What you are practising

These larger tasks combine the earlier topics. Break each requirement into small pieces. Check one behaviour at a time. Read the supporting types before writing code. Everything still runs locally with fake services.

This exercise focuses on bounded concurrency. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Run at most limit tasks at once.
2. Start waiting tasks in input order whenever a slot is free.
3. Return outcomes in input order; a failure is {ok:false,error} with the exact thrown value and does not stop other tasks.
4. A success is {ok:true,value}.
5. Handle synchronous throws.
6. Reject invalid limit with RangeError before calling tasks.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

With limit 2 and three tasks, only tasks 0 and 1 start initially. When task 1 finishes, task 2 can start. Results remain in positions 0, 1, 2. A thrown error becomes {ok:false,error}.

## 5. Rules and edge cases

Limit must be a positive integer. Empty input returns an empty array for a valid limit. Use no real timers.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 111
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
