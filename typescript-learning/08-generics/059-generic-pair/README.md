# 059 — Generic pair

## 1. What you are practising

A generic is a type parameter, often named T. It lets one definition preserve different input types. A constraint such as T extends { id: number } limits accepted types. keyof T means the property names of T.

This exercise focuses on generic pair. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return a two-item tuple containing left then right.
2. A tuple is an array with known positions.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `pair(1, "a")` → `[1,"a"]`. This is the required observable result.
- `pair(false, 0)` → `[false,0]`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 059
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
