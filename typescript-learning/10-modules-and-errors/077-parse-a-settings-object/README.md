# 077 — Parse a settings object

## 1. What you are practising

export makes a value available to another file; import reads it. Throwing an Error stops normal work until a catch handles it. unknown is safer than any because you must check it. JSON.parse can throw and can return values with unexpected shapes.

This exercise focuses on parse a settings object. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return parsed settings only when JSON describes a non-null non-array object with theme "light" or "dark" and integer retries from 0 to 5.
2. Return null otherwise.
3. Return only the two defined properties.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `parseSettings("{\"theme\":\"dark\",\"retries\":2,\"extra\":1}")` → `{"theme":"dark","retries":2}`. This is the required observable result.
- `parseSettings("{\"theme\":\"light\",\"retries\":0}")` → `{"theme":"light","retries":0}`. This is the required observable result.
- `parseSettings("{\"theme\":\"dark\",\"retries\":6}")` → `null`. This is the required observable result.
- `parseSettings("{\"theme\":\"blue\",\"retries\":1}")` → `null`. This is the required observable result.
- `parseSettings("null")` → `null`. This is the required observable result.
- `parseSettings("bad")` → `null`. This is the required observable result.
- `parseSettings("[]")` → `null`. This is the required observable result.
- `parseSettings("{\"theme\":\"dark\",\"retries\":1.5}")` → `null`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 077
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
