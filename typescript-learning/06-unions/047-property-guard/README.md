# 047 — Property guard

## 1. What you are practising

A union such as string | number permits either type. A literal type permits one exact value. Narrowing uses a check to learn which type a value has. A type guard returns a boolean and tells TypeScript what a successful check means.

This exercise focuses on property guard. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return true for a non-null object with integer id and string name.
2. Extra properties are allowed.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `isUser({"id":1,"name":"A"})` → `true`. This is the required observable result.
- `isUser({"id":1.5,"name":"A"})` → `false`. This is the required observable result.
- `isUser({"id":1})` → `false`. This is the required observable result.
- `isUser(null)` → `false`. This is the required observable result.
- `isUser([])` → `false`. This is the required observable result.
- `isUser({"id":0,"name":"","extra":true})` → `true`. This is the required observable result.

## 5. Rules and edge cases

Reject arrays, null, primitives, and wrongly typed properties. Do not mutate the value.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 047
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
