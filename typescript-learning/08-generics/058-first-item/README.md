# 058 — First item

## 1. What you are practising

A generic is a type parameter, often named T. It lets one definition preserve different input types. A constraint such as T extends { id: number } limits accepted types. keyof T means the property names of T.

This exercise focuses on first item. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return the first item or undefined when empty.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `first([1,2])` → `1`. This is the required observable result.
- `first([])` → `undefined`. This is the required observable result.
- `first(["a","b"])` → `"a"`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 058
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
