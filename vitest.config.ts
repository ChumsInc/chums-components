import {defineConfig} from 'vitest/config'
import {resolve} from 'node:path'

export default defineConfig({
    test: {
        restoreMocks: true,
        clearMocks: true,
        isolate: true,
        globals: true,
        environment: 'happy-dom',
        setupFiles: resolve(import.meta.dirname, 'vitest.setup.ts'),
        include: ['src/**/*.test.{ts,tsx}'],
        coverage: {
            provider: 'v8',
            include: ['dev/**/*', 'src/**/*'],
            reporter: ['text', 'json', 'html'],
        }
    },
})
