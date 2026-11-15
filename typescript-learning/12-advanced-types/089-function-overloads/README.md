# 089 — Function overloads

## 1. What you are practising

An overload gives one function different call signatures. A discriminated union uses a shared literal property to identify each case. A mapped type visits each property key. A conditional type chooses a type with extends. never represents an impossible value and helps check every union case.

This exercise focuses on function overloads. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Add overload signatures so a string argument returns number and a number argument returns string.
2. Convert strings using Number and numbers using String.
3. Do not allow boolean arguments.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `convert("12")` → `12`. This is the required observable result.
- `convert(12)` → `"12"`. This is the required observable result.
- `convert("")` → `0`. This is the required observable result.
- `convert(0)` → `"0"`. This is the required observable result.

## 5. Rules and edge cases

Numeric strings are finite valid numbers. No invalid numeric text is tested.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 089
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
