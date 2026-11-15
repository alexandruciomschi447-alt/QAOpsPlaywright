# 108 — Import user JSON

## 1. What you are practising

These larger tasks combine the earlier topics. Break each requirement into small pieces. Check one behaviour at a time. Read the supporting types before writing code. Everything still runs locally with fake services.

This exercise focuses on import user json. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Parse JSON.
2. If it is not an array or cannot be parsed, return {ok:false,error:"Invalid input"}.
3. Otherwise keep records with integer id and nonempty trimmed string name.
4. Keep only the first valid record per id.
5. Return cleaned users in first-valid-record order and rejected as the number of invalid or duplicate records.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `importUsers("[{\"id\":1,\"name\":\" A \"},{\"id\":1,\"name\":\"B\"},null,{\"id\":2,\"name\":\"\"},{\"id\":3,\"name\":\"C\"}]")` → `{"ok":true,"users":[{"id":1,"name":"A"},{"id":3,"name":"C"}],"rejected":3}`. This is the required observable result.
- `importUsers("[]")` → `{"ok":true,"users":[],"rejected":0}`. This is the required observable result.
- `importUsers("bad")` → `{"ok":false,"error":"Invalid input"}`. This is the required observable result.
- `importUsers("{}")` → `{"ok":false,"error":"Invalid input"}`. This is the required observable result.
- `importUsers("[{\"id\":1,\"name\":\"\"},{\"id\":1,\"name\":\"A\"}]")` → `{"ok":true,"users":[{"id":1,"name":"A"}],"rejected":1}`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 108
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
