# 040 — Count object keys

## 1. What you are practising

An object stores named properties. An interface describes an object shape. A type alias gives a name to a type. A property with ? may be missing. Read properties with a dot.

This exercise focuses on count object keys. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return the number of own enumerable string keys.
2. Record<string, number> describes an object with text keys and numeric values.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `countKeys({})` → `0`. This is the required observable result.
- `countKeys({"a":1,"b":2})` → `2`. This is the required observable result.

## 5. Rules and edge cases

Use own properties only. Inherited properties do not count. Do not mutate the input.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 040
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
