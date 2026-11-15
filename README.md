# Learn TypeScript, one small step at a time

There are **112 exercises in 14 topics**. Start with [001 — A named greeting](typescript-learning/01-basics/001-a-named-greeting/README.md). All starters are unfinished. Initial FAIL results are expected; they do not mean installation failed.

Your existing Playwright files remain in this workspace. This curriculum uses the same root npm package. It does not run the Playwright tests.

## Setup in IntelliJ

Use **Node.js 24 LTS**. If needed, install the Node.js 24 LTS installer from [nodejs.org](https://nodejs.org/en/download), restart IntelliJ, and check `node --version` in IntelliJ's Terminal. Open this workspace folder in IntelliJ. Use the Terminal tool window at the bottom of the IDE; all commands below run from the workspace root, beside package.json.

```sh
npm install
npm run list
npm run check -- 001
```

Dependencies have already been installed in this workspace. On another machine use `npm ci` to install the exact locked versions. The exercises themselves need no network access, accounts, or API keys. Installation needs the npm registry.

Open the exercise README first, then edit its exercise.ts. IntelliJ's TypeScript support should use the TypeScript package in this workspace's node_modules. If needed, search Settings for **TypeScript**, enable its language service, and select that package. The curriculum's tsconfig.json enables strict checking. Red errors in later unfinished type exercises are expected. Use the command result for the exercise you are working on.

For the first exercises, the `export function ... { }` wrapper is already provided. Write your work at TODO inside the braces. `return` gives your result to the checker. Replace the line throwing "Not implemented" when you add your work. You will learn functions properly in topic 03.

## Daily commands

| Goal | Command |
| --- | --- |
| List exercises in order | `npm run list` |
| Check exercise 001 | `npm run check -- 001` |
| Check topic 01 | `npm run check:topic -- 01` |
| Check everything | `npm run check:all` |
| Show progress | `npm run progress` |
| Audit curriculum files and links | `npm run curriculum:validate` |

A topic is its two-digit number in the [curriculum checklist](typescript-learning/CURRICULUM.md). Exercise IDs have three digits. Do the topics in checklist order, then do the eight exercises within each topic in order. Early exercises only need a few lines. Later challenges combine several skills.

## Reading a result

`PASS | 001 A named greeting` means the types and required runtime behaviour passed. `FAIL` means at least one requirement did not pass. The output tells you whether the problem is in types or runtime behaviour. Type errors include a filename and location. Runtime failures include the requirement name and expected and actual values where available. Read the first failure, compare it with the README, make a small change, and check again. A failed command exits with a non-zero code.

TypeScript checks whether your code uses values and types correctly **before it runs**. Runtime tests call your code and check its results. Vitest alone does not check TypeScript types; our command runs both. Type exercises use exact compile-time assertions and `@ts-expect-error` for calls that must be rejected. An unused `@ts-expect-error` is a failure: the invalid usage was accepted. Some exercises need only type checks. Keep the separate checks unchanged and avoid `any` or compiler suppressions.

In a type test, “Type false does not satisfy the constraint true” means the actual type did not match the required type. Open the reported test line to see the expected shape, then change exercise.ts. Do not change the assertion.

Only the selected exercise's files and their imports are type-checked. Its runtime tests are the only tests selected. Do not import other unfinished exercise files; supporting types are provided locally where needed. The root curriculum tsconfig helps the editor; do not use a whole-folder type check as your daily exercise check.

## Progress

Progress is saved locally in typescript-learning/.cache/progress.json and is ignored by Git. A PASS records a fingerprint of the exercise, supporting files, checks, checker configuration, and dependency lockfile. Editing any of those marks an old pass **STALE** until you check it again. A failed recheck keeps the earlier-pass history and displays FAIL. The checklist is for your own notes; it does not claim a verified pass. Deleting .cache resets the local history. Checks validate behaviour, not authorship or every possible input.

See the [glossary](typescript-learning/GLOSSARY.md) whenever a word is unfamiliar. There are no solutions or answer files. Ask an assistant for a small hint when you get stuck; the workspace [assistant instructions](AGENTS.md) protect your practice time.

Tool references: [TypeScript strict mode](https://www.typescriptlang.org/tsconfig/strict.html), [noEmit](https://www.typescriptlang.org/tsconfig/noEmit.html), and [Vitest guide](https://vitest.dev/guide/).
