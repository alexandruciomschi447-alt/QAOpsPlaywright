# 063 — Generic map

## 1. What you are practising

A generic is a type parameter, often named T. It lets one definition preserve different input types. A constraint such as T extends { id: number } limits accepted types. keyof T means the property names of T.

This exercise focuses on generic map. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return a new array by calling transform once per item in order.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

For [2, 1], a callback that converts numbers to text gives ["2", "1"]. An empty input gives [].

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 063
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
