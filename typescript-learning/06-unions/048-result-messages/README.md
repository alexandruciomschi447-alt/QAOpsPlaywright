# 048 — Result messages

## 1. What you are practising

A union such as string | number permits either type. A literal type permits one exact value. Narrowing uses a check to learn which type a value has. A type guard returns a boolean and tells TypeScript what a successful check means.

This exercise focuses on result messages. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return "OK: VALUE" for success, or "Error: ERROR" for failure.
2. The ok property tells you which other property exists.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `message({"ok":true,"value":"saved"})` → `"OK: saved"`. This is the required observable result.
- `message({"ok":false,"error":"offline"})` → `"Error: offline"`. This is the required observable result.
- `message({"ok":true,"value":""})` → `"OK: "`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 048
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
