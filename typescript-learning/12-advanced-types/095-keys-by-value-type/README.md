# 095 — Keys by value type

## 1. What you are practising

An overload gives one function different call signatures. A discriminated union uses a shared literal property to identify each case. A mapped type visits each property key. A conditional type chooses a type with extends. never represents an impossible value and helps check every union case.

This exercise focuses on keys by value type. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Produce the union of keys whose value types extend V.
2. Ignore optional keys whose types include undefined unless V also accepts undefined.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

KeysMatching<{id: number; name: string}, number> is "id". No matching keys produces never. Assigning "name" to KeysMatching<{id:number;name:string}, number> should be rejected.

## 5. Rules and edge cases

Follow the declared input types. Keep arrays and objects unchanged unless a class method explicitly changes its own state. Preserve input order where results form a list. The task describes missing values and failures; do not invent extra validation.

This is a compile-time exercise. The exact type must match, not just accept a few examples. Do not use any, type-check suppression, or broad assertions to bypass the checks. Structural object types may accept variables with extra properties; extra-key rejection examples use fresh object literals.

## 6. How to check

From the workspace root:

```sh
npm run check -- 095
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks passed. Explain the behaviour in your own words, then move to the next exercise.
