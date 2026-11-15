# 099 — Paginate locally

## 1. What you are practising

QA means checking that software behaves as required. Backend code often validates data, selects records, and handles failures. Dependency injection means passing a service into code instead of creating it inside. Tests can then pass a fake service.

This exercise focuses on paginate locally. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return {items, page, pageSize, total, totalPages}.
2. Page numbering starts at 1.
3. Select that page of items. totalPages is 0 for no items.
4. A page beyond the end has an empty items list.
5. Reject non-positive or non-integer page or pageSize with RangeError.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `paginate([1,2,3,4,5], 2, 2)` → `{"items":[3,4],"page":2,"pageSize":2,"total":5,"totalPages":3}`. This is the required observable result.
- `paginate([], 1, 2)` → `{"items":[],"page":1,"pageSize":2,"total":0,"totalPages":0}`. This is the required observable result.
- `paginate([1], 3, 2)` → `{"items":[],"page":3,"pageSize":2,"total":1,"totalPages":1}`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 099
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
