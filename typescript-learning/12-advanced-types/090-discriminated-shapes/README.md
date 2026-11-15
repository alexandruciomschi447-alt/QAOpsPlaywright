# 090 — Discriminated shapes

## 1. What you are practising

An overload gives one function different call signatures. A discriminated union uses a shared literal property to identify each case. A mapped type visits each property key. A conditional type chooses a type with extends. never represents an impossible value and helps check every union case.

This exercise focuses on discriminated shapes. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Return width times height for a rectangle, or Math.PI times radius squared for a circle.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `area({"kind":"rectangle","width":3,"height":4})` → `12`. This is the required observable result.
- `area({"kind":"circle","radius":0})` → `0`. This is the required observable result.
- `area({"kind":"circle","radius":2})` → `12.566370614359172`. This is the required observable result.

## 5. Rules and edge cases

Dimensions are finite non-negative numbers. Do not change the shape.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 090
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
