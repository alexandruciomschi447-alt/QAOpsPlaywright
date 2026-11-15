# 064 — Keys of a model

## 1. What you are practising

A generic is a type parameter, often named T. It lets one definition preserve different input types. A constraint such as T extends { id: number } limits accepted types. keyof T means the property names of T.

This exercise focuses on keys of a model. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Define Keys<T> as the union of the property names in T.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

`Keys<{id: number; name: string}>` allows "id" or "name". For an empty object it is never, which permits no value.

## 5. Rules and edge cases

Follow the declared input types. Keep arrays and objects unchanged unless a class method explicitly changes its own state. Preserve input order where results form a list. The task describes missing values and failures; do not invent extra validation.

This is a compile-time exercise. The exact type must match, not just accept a few examples. Do not use any, type-check suppression, or broad assertions to bypass the checks. Structural object types may accept variables with extra properties; extra-key rejection examples use fresh object literals.

## 6. How to check

From the workspace root:

```sh
npm run check -- 064
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks passed. Explain the behaviour in your own words, then move to the next exercise.
