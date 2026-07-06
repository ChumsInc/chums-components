/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "node:path";
import pkg from './package.json' with { type: 'json' };

const serverConfig = defineConfig({
    plugins: [
        react(),
    ],
    server: {
        host: 'localhost',
        port: 80,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
            },
            '/api/user/v2/cookie-consent.png': {
                target: 'https://intranet.chums.com/api/user/v2/cookie-consent.png',
                changeOrigin: true,
            },
            '/images': {
                target: 'https://intranet.chums.com/',
                changeOrigin: true,
            }
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        }
    },
    build: {
        outDir: 'dist-dev'
    },
    resolve: {
        alias: {
            '@chumsinc/ui/*': resolve(import.meta.dirname, 'src/*'),
            '@chumsinc/ui': resolve(import.meta.dirname, 'src/index.ts'),
        }
    }
})

// https://vite.dev/config/
export default defineConfig(({command}) => {
    if (command === 'serve') {
        return serverConfig
    }
    return {
        ...serverConfig,
        plugins: [
            react({}),
            // cssInjectedByJsPlugin(),
        ],
        resolve: {},
        build: {
            lib: {
                entry: {
                    'index': resolve(import.meta.dirname, 'src/index.ts'),
                    'app-version/index': resolve(import.meta.dirname, 'src/app-version/index.ts'),
                    'customer-autocomplete/index': resolve(import.meta.dirname, 'src/customer-autocomplete/index.ts'),
                    'item-autocomplete/index': resolve(import.meta.dirname, 'src/item-autocomplete/index.ts'),
                },
                fileName: (format, entryName) => `${entryName}.js`,
                formats: ['es'],
            },
            rolldownOptions: {
                external: Object.keys(pkg.peerDependencies),
            },
            sourcemap: true,
            minify: true,
        },
    }
})
