# 036 — Optional display name

## 1. What you are practising

An object stores named properties. An interface describes an object shape. A type alias gives a name to a type. A property with ? may be missing. Read properties with a dot.

This exercise focuses on optional display name. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return nickname when present, including an empty string.
2. Otherwise return "User ID" with the numeric id.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `displayName({"id":7})` → `"User 7"`. This is the required observable result.
- `displayName({"id":7,"nickname":"Ada"})` → `"Ada"`. This is the required observable result.
- `displayName({"id":0,"nickname":""})` → `""`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 036
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
