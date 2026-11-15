# 103 — Validate a create request

## 1. What you are practising

QA means checking that software behaves as required. Backend code often validates data, selects records, and handles failures. Dependency injection means passing a service into code instead of creating it inside. Tests can then pass a fake service.

This exercise focuses on validate a create request. Earlier exercises introduce the pieces used here.

## 2. Your task

1. Accept an object with a nonempty trimmed name and an integer age from 0 to 130.
2. Return {ok:true,user:{name:trimmedName,age}}.
3. Otherwise return {ok:false,errors} with "name" then "age" for invalid fields.
4. For a non-object or array, return errors ["body"].
5. Ignore extra fields.

## 3. File to edit

Edit [exercise.ts](./exercise.ts). Keep the separate checks unchanged. TODO marks the work to do.

## 4. Examples

- `validateCreate({"name":" Ada ","age":30,"extra":true})` → `{"ok":true,"user":{"name":"Ada","age":30}}`. This is the required observable result.
- `validateCreate({"name":"","age":-1})` → `{"ok":false,"errors":["name","age"]}`. This is the required observable result.
- `validateCreate({"name":"A","age":1.5})` → `{"ok":false,"errors":["age"]}`. This is the required observable result.
- `validateCreate({"age":0})` → `{"ok":false,"errors":["name"]}`. This is the required observable result.
- `validateCreate(null)` → `{"ok":false,"errors":["body"]}`. This is the required observable result.
- `validateCreate([])` → `{"ok":false,"errors":["body"]}`. This is the required observable result.
- `validateCreate({"name":"A","age":130})` → `{"ok":true,"user":{"name":"A","age":130}}`. This is the required observable result.

## 5. Rules and edge cases

Inputs have the declared types. Do not change input arrays or objects. Keep input order unless the task says otherwise.

Use the exact exported names. Do not replace a failed check with a hard-coded example result. No accounts, keys, or network calls are needed.

## 6. How to check

From the workspace root:

```sh
npm run check -- 103
```

The starter is unfinished, so FAIL is expected. The command checks only this exercise and its supporting imports.

## 7. When it passes

PASS means all of this exercise’s TypeScript checks and runtime requirements passed. Explain the behaviour in your own words, then move to the next exercise.
