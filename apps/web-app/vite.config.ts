import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const appDir = fileURLToPath(new URL('.', import.meta.url));
const rootDir = resolve(appDir, '../..')

export default defineConfig({
    plugins: [react({
        include: /\.(js|jsx|ts|tsx)$/
    })],
    server: {
        port: 8080,
        watch: {
            ignored: ['!**/packages/ui/src/**']
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
            },
            '/node-sage': {
                target: 'http://localhost:8081',
                changeOrigin: true,
            }
        }

    },
    build: {
        // Modern replacement for handling chunk optimization via Rolldown
        rolldownOptions: {
            moduleTypes: {
                // Enforces that any file with a .ts extension coming from
                // the external packages/ folder is evaluated with full TSX parsing capabilities
                '.ts': 'tsx',
                '.tsx': 'tsx'
            }
        }
    },
    resolve: {
        tsconfigPaths: true,
        alias: {
            '@chumsinc/ui': resolve(rootDir, 'packages/ui/src')
        },
    },
    optimizeDeps: {
        exclude: ['@chumsinc/ui']
    }
})
