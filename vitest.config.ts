/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: path.join(__dirname, 'src', 'setupTests.ts'),
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov', 'html'],
      exclude: [
        '**/src/**/in-memory/*'
      ]
    },
  },
  plugins: [
    tsconfigPaths()
  ]
})
