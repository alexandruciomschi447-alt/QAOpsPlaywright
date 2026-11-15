# 102 — Search users

## 1. What you are practising

QA means checking that software behaves as required. Backend code often validates data, selects records, and handles failures. Dependency injection means passing a service into code instead of creating it inside. Tests can then pass a fake service.

This exercise focuses on search users. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Trim query and match it against names without case sensitivity.
2. Keep original order.
3. An empty trimmed query returns a new array with all users.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `searchUsers([{"id":1,"name":"Ada"},{"id":2,"name":"Grace"},{"id":3,"name":"ADAM"}], " ad ")` → `[{"id":1,"name":"Ada"},{"id":3,"name":"ADAM"}]`. This is the required observable result.
- `searchUsers([], "x")` → `[]`. This is the required observable result.
- `searchUsers([{"id":1,"name":"Ada"}], "   ")` → `[{"id":1,"name":"Ada"}]`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 102
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
