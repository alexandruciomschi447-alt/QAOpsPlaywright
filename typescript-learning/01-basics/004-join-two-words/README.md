# 004 — Join two words

## 1. What you are practising

A variable is a named value. Use const for a value you do not reassign and let for one you change. string means text, number means a number, and boolean means true or false. Operators such as +, -, * and / combine values.

This exercise focuses on join two words. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return the two words with exactly one space between them.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `joinWords("Hello", "Ada")` → `"Hello Ada"`. This is the required observable result.
- `joinWords("", "Ada")` → `" Ada"`. This is the required observable result.
- `joinWords("a", "")` → `"a "`. This is the required observable result.

## 5. Rules and edge cases

Preserve all existing spaces and letter case. Empty words are allowed.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 004
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
