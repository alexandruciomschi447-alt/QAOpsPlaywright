# 080 — Module dependency

## 1. What you are practising

export makes a value available to another file; import reads it. Throwing an Error stops normal work until a catch handles it. unknown is safer than any because you must check it. JSON.parse can throw and can return values with unexpected shapes.

This exercise focuses on module dependency. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Import the User type and separator value from model.ts.
2. Return id, separator, and name as one string.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `formatUser({"id":2,"name":"Ada"})` → `"2 / Ada"`. This is the required observable result.
- `formatUser({"id":0,"name":""})` → `"0 / "`. This is the required observable result.

## 5. Rules and edge cases

Keep model.ts unchanged. Do not mutate user.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 080
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
