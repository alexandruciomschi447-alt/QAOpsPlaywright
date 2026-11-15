# 034 — Read an object

## 1. What you are practising

An object stores named properties. An interface describes an object shape. A type alias gives a name to a type. A property with ? may be missing. Read properties with a dot.

This exercise focuses on read an object. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return NAME (AGE), using the person properties.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `personLabel({"name":"Ada","age":30})` → `"Ada (30)"`. This is the required observable result.
- `personLabel({"name":"","age":0})` → `" (0)"`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 034
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
