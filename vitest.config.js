import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
export default defineConfig({
    test: {
        restoreMocks: true,
        clearMocks: true,
        isolate: true,
        projects: [
            {
                extends: true,
                test: {
                    name: 'ui-components',
                    root: resolve(cwd(), 'packages/ui'),
                    include: [
                        'src/**/*.test.{ts,tsx}'
                    ],
                    environment: 'happy-dom',
                    globals: true,
                    setupFiles: [resolve(cwd(), 'vitest.setup.ts')],
                }
            },
        ],
        coverage: {
            provider: 'v8',
            include: ['apps/*/src/**/*', 'packages/*/src/**/*'],
            reporter: ['text', 'json', 'html'],
        }
    },
});
