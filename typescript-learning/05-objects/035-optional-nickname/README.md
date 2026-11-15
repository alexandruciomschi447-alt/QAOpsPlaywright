# 035 — Optional nickname

## 1. What you are practising

An object stores named properties. An interface describes an object shape. A type alias gives a name to a type. A property with ? may be missing. Read properties with a dot.

This exercise focuses on optional nickname. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Define Profile with required id: number and optional nickname: string.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

`{ id: 1 }` and `{ id: 1, nickname: "A" }` should compile. A missing id should be rejected.

## 5. Rules and edge cases

Follow the declared input types. Keep arrays and objects unchanged unless a class method explicitly changes its own state. Preserve input order where results form a list. The task describes missing values and failures; do not invent extra validation.

This is a compile-time exercise. The exact type must match, not just accept a few examples. Do not use any, type-check suppression, or broad assertions to bypass the checks. Structural object types may accept variables with extra properties; extra-key rejection examples use fresh object literals.

## 6. How to check

From the workspace root:

```sh
npm run check -- 035
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks passed. Explain the behaviour in your own words, then move to the next exercise.
