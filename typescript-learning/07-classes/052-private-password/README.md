# 052 — Private password

## 1. What you are practising

A class describes objects with data and methods. A constructor receives initial data. public members are available to callers; private members stay inside the class; protected members are also available to child classes. extends creates a child class.

This exercise focuses on private password. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Store secret in a private field named secret. matches returns whether the candidate exactly matches it.
2. This is a language exercise, not a real password storage design.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

Vault("Ab").matches("Ab") returns true; matches("ab") returns false.

## 5. Rules and edge cases

Follow the declared input types. Keep arrays and objects unchanged unless a class method explicitly changes its own state. Preserve input order where results form a list. The task describes missing values and failures; do not invent extra validation.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 052
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
