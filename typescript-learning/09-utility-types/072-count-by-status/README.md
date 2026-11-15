# 072 — Count by status

## 1. What you are practising

Utility types change an existing type. Partial makes properties optional; Required makes them required; Pick keeps named properties; Omit removes them; Record describes keys and values; Readonly prevents assignment through that type. These changes affect type checking, not runtime objects.

This exercise focuses on count by status. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return counts for both statuses, including zero counts.
2. Status is "pass" or "fail".

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `countStatuses(["pass","fail","pass"])` → `{"pass":2,"fail":1}`. This is the required observable result.
- `countStatuses([])` → `{"pass":0,"fail":0}`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 072
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
