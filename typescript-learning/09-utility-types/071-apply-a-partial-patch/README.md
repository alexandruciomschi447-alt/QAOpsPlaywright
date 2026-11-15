# 071 — Apply a partial patch

## 1. What you are practising

Utility types change an existing type. Partial makes properties optional; Required makes them required; Pick keeps named properties; Omit removes them; Record describes keys and values; Readonly prevents assignment through that type. These changes affect type checking, not runtime objects.

This exercise focuses on apply a partial patch. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return a new object containing the original user with the supplied properties replaced.
2. Missing update properties keep the original values.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `patch({"id":1,"name":"A"}, {"name":"B"})` → `{"id":1,"name":"B"}`. This is the required observable result.
- `patch({"id":1,"name":"A"}, {})` → `{"id":1,"name":"A"}`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 071
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
