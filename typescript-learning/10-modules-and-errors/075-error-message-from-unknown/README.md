# 075 — Error message from unknown

## 1. What you are practising

export makes a value available to another file; import reads it. Throwing an Error stops normal work until a catch handles it. unknown is safer than any because you must check it. JSON.parse can throw and can return values with unexpected shapes.

This exercise focuses on error message from unknown. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return error.message when error is an Error instance.
2. Otherwise return "Unknown error".

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `errorMessage(null)` → `"Unknown error"`. This is the required observable result.
- `errorMessage("oops")` → `"Unknown error"`. This is the required observable result.
- `errorMessage({"message":"fake"})` → `"Unknown error"`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 075
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
