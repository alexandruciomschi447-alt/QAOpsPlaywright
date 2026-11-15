# 098 — Validate an API response

## 1. What you are practising

QA means checking that software behaves as required. Backend code often validates data, selects records, and handles failures. Dependency injection means passing a service into code instead of creating it inside. Tests can then pass a fake service.

This exercise focuses on validate an api response. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Accept only non-null non-array objects with items as an array of {id: integer, name: string}, and total as a non-negative integer at least items.length.
2. Extra properties are allowed.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `validateResponse({"items":[{"id":1,"name":"A"}],"total":1})` → `true`. This is the required observable result.
- `validateResponse({"items":[],"total":0})` → `true`. This is the required observable result.
- `validateResponse({"items":[{"id":"1","name":"A"}],"total":1})` → `false`. This is the required observable result.
- `validateResponse({"items":[],"total":-1})` → `false`. This is the required observable result.
- `validateResponse({"items":[{"id":1,"name":"A"}],"total":0})` → `false`. This is the required observable result.
- `validateResponse(null)` → `false`. This is the required observable result.
- `validateResponse({"items":[],"total":1.5})` → `false`. This is the required observable result.
- `validateResponse({"items":[null],"total":1})` → `false`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 098
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
