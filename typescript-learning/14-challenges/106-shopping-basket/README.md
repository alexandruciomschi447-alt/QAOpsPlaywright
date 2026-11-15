# 106 — Shopping basket

## 1. What you are practising

These larger tasks combine the earlier topics. Break each requirement into small pieces. Check one behaviour at a time. Read the supporting types before writing code. Everything still runs locally with fake services.

This exercise focuses on shopping basket. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Each line has unitPrice in integer pennies and quantity as a non-negative integer.
2. Merge equal sku values, preserving first appearance order.
3. Return items with sku, quantity, subtotal, and a total for all items.
4. Repeated sku values have the same unitPrice.
5. Keep zero-quantity items.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `basket([{"sku":"a","unitPrice":100,"quantity":2},{"sku":"b","unitPrice":50,"quantity":1},{"sku":"a","unitPrice":100,"quantity":3}])` → `{"items":[{"sku":"a","quantity":5,"subtotal":500},{"sku":"b","quantity":1,"subtotal":50}],"total":550}`. This is the required observable result.
- `basket([])` → `{"items":[],"total":0}`. This is the required observable result.
- `basket([{"sku":"z","unitPrice":20,"quantity":0}])` → `{"items":[{"sku":"z","quantity":0,"subtotal":0}],"total":0}`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 106
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
