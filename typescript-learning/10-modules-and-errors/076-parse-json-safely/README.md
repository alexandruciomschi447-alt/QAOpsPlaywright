# 076 — Parse JSON safely

## 1. What you are practising

export makes a value available to another file; import reads it. Throwing an Error stops normal work until a catch handles it. unknown is safer than any because you must check it. JSON.parse can throw and can return values with unexpected shapes.

This exercise focuses on parse json safely. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Parse JSON.
2. Return { ok: true, value } for valid JSON of any shape.
3. Return { ok: false, error: "Invalid JSON" } when parsing throws.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `parseJson("{\"x\":1}")` → `{"ok":true,"value":{"x":1}}`. This is the required observable result.
- `parseJson("null")` → `{"ok":true,"value":null}`. This is the required observable result.
- `parseJson("[1]")` → `{"ok":true,"value":[1]}`. This is the required observable result.
- `parseJson("3")` → `{"ok":true,"value":3}`. This is the required observable result.
- `parseJson("bad")` → `{"ok":false,"error":"Invalid JSON"}`. This is the required observable result.
- `parseJson("")` → `{"ok":false,"error":"Invalid JSON"}`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 076
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
