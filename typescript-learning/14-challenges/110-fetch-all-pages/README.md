# 110 — Fetch all pages

## 1. What you are practising

These larger tasks combine the earlier topics. Break each requirement into small pieces. Check one behaviour at a time. Read the supporting types before writing code. Everything still runs locally with fake services.

This exercise focuses on fetch all pages. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Fetch page 1, then sequentially fetch through totalPages from page 1.
2. A totalPages value of 0 means return an empty list after the first call.
3. Combine users in page order and keep the first user for each id.
4. Stop and propagate any failure.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

Page 1 with user id 1 and totalPages 2, then page 2 with ids 1 and 2, gives the first user 1 followed by user 2. totalPages 0 gives [].

## 5. Rules and edge cases

Mock pages have consistent non-negative integer totalPages. Do not make external requests or mutate page data.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 110
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
