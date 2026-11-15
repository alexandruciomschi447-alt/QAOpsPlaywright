# Setup verification

Verified locally on 15 November 2026 with Node.js 24.19.0, TypeScript 7.0.2, and Vitest 5.1.0.

- Installed dependencies successfully; npm reported no vulnerabilities.
- Audited 112 sequential exercise IDs across 14 topics, required README sections, starter files, checks, and local documentation links.
- Ran the complete curriculum: all 112 unfinished starters reported FAIL with a non-zero exit code, as intended.
- Audited compiler diagnostics and corrected generated test issues. Rechecked the changed topic and affected module exercise.
- Checked topic 03 alone: eight exercises selected, types passed, unfinished runtime stubs failed.
- Used temporary correct code to verify PASS for basic runtime, type-only, generic, async, default-parameter, and module exercises.
- Used temporary incorrect code to verify FAIL for wrong output, wrong types, optional instead of required properties, and `any`, including cases where runtime results were correct.
- Temporarily broke an unrelated exercise: exercise 001 still passed alone.
- Verified an edit after PASS produces STALE progress, and a successful recheck restores PASS.
- Verified an unknown exercise ID fails with a non-zero exit code.

Temporary verification code was removed and all starters restored. Local progress was reset for the learner. No exercise solutions are included.

Run `npm run curriculum:validate` to repeat the structural audit. `npm run check:all` checks your current work; initial FAIL results are expected.
