import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: JSON.parse(process.env.LEARNING_TEST_FILES || '[]'),
    environment: 'node',
    maxWorkers: 2,
    testTimeout: 5000,
    restoreMocks: true,
    clearMocks: true,
  },
});
