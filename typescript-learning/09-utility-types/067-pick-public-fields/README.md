# 067 — Pick public fields

## 1. What you are practising

Utility types change an existing type. Partial makes properties optional; Required makes them required; Pick keeps named properties; Omit removes them; Record describes keys and values; Readonly prevents assignment through that type. These changes affect type checking, not runtime objects.

This exercise focuses on pick public fields. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Use Pick to keep only id and name from User.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

`{ id: 1, name: "A" }` should compile. An object literal with email should be rejected.

## 5. Rules and edge cases

Follow the declared input types. Keep arrays and objects unchanged unless a class method explicitly changes its own state. Preserve input order where results form a list. The task describes missing values and failures; do not invent extra validation.

This is a compile-time exercise. The exact type must match, not just accept a few examples. Do not use any, type-check suppression, or broad assertions to bypass the checks. Structural object types may accept variables with extra properties; extra-key rejection examples use fresh object literals.

## 6. How to check

From the workspace root:

```sh
npm run check -- 067
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks passed. Explain the behaviour in your own words, then move to the next exercise.
