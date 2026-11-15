# 112 — Typed service pipeline

## 1. What you are practising

These larger tasks combine the earlier topics. Break each requirement into small pieces. Check one behaviour at a time. Read the supporting types before writing code. Everything still runs locally with fake services.

This exercise focuses on typed service pipeline. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Validate request as a non-null non-array object with a nonempty trimmed string name.
2. Invalid input returns {status:400,error:"Invalid name"} without calling dependencies.
3. Call repository.create once with trimmed name, then await audit once with the returned user.
4. Return {status:201,user} only after audit succeeds.
5. Any repository or audit failure returns {status:500,error:"Internal error"}.
6. Do not call audit if create fails.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

Request {name:" Ada "} creates "Ada", audits the returned user, then gives {status:201,user}. Request {name:" "} gives {status:400,error:"Invalid name"} and calls no services. A service failure gives {status:500,error:"Internal error"}.

## 5. Rules and edge cases

Ignore extra request fields. Dependencies are injected mocks. Do not make external requests. Do not mutate request or returned user.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 112
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
