# 109 — Generic memory repository

## 1. What you are practising

These larger tasks combine the earlier topics. Break each requirement into small pieces. Check one behaviour at a time. Read the supporting types before writing code. Everything still runs locally with fake services.

This exercise focuses on generic memory repository. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Store entities by id.
2. Saving an existing id replaces the value without moving its position. find returns the stored reference or undefined. all returns a new array in insertion order. remove returns true only if an entity existed.
3. Separate instances have separate data.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

Save id 2 then id 1: all() keeps [2, 1]. Replacing id 2 keeps that order.

## 5. Rules and edge cases

Follow the declared input types. Keep arrays and objects unchanged unless a class method explicitly changes its own state. Preserve input order where results form a list. The task describes missing values and failures; do not invent extra validation.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 109
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
