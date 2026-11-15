# 091 — Mapped optional properties

## 1. What you are practising

An overload gives one function different call signatures. A discriminated union uses a shared literal property to identify each case. A mapped type visits each property key. A conditional type chooses a type with extends. never represents an impossible value and helps check every union case.

This exercise focuses on mapped optional properties. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Define a mapped type that makes every property optional while preserving its value type.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

Optional<{id: number}> accepts {} and {id: 1}, but rejects {id: "x"}.

## 5. Rules and edge cases

Follow the declared input types. Keep arrays and objects unchanged unless a class method explicitly changes its own state. Preserve input order where results form a list. The task describes missing values and failures; do not invent extra validation.

This is a compile-time exercise. The exact type must match, not just accept a few examples. Do not use any, type-check suppression, or broad assertions to bypass the checks. Structural object types may accept variables with extra properties; extra-key rejection examples use fresh object literals.

## 6. How to check

From the workspace root:

```sh
npm run check -- 091
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks passed. Explain the behaviour in your own words, then move to the next exercise.
