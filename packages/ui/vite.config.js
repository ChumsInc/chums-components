import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { globSync } from 'glob';
import { fileURLToPath } from "node:url";
const nestedInput = Object.fromEntries(globSync('src/**/index.ts*', {
    ignore: ['src/**/*.test.*', 'src/**/*.spec.*', 'src/**/__tests__/**']
}).map(file => {
    const normalizedFile = file.replace(/\\/g, '/');
    // 1. Handle the main root package entry
    if (normalizedFile === 'src/index.ts') {
        return ['index', fileURLToPath(new URL(normalizedFile, import.meta.url))];
    }
    // 2. Map component folders to 'folderName/index'
    // Example: 'src/button/index.tsx' -> 'button/index'
    const entryKey = normalizedFile
        .replace('src/', '') // 'button/index.tsx'
        .replace(/\.ts[x]?$/, ''); // 'button/index'
    return [
        entryKey,
        fileURLToPath(new URL(file, import.meta.url))
    ];
}));
export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: './src/index.ts',
            formats: ['es'],
        },
        rolldownOptions: {
            input: nestedInput,
            external: ['react', 'react-dom', 'react/jsx-runtime',
                'react-bootstrap', 'bootstrap', '@base-ui/react',
                '@mantine/hooks',
                '@chumsinc/ui-utils',
                /node_modules/
            ],
            output: {
                format: 'esm',
                // preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
                assetFileNames: '[name]/[name].[ext]',
                chunkFileNames: '_internal/chunks/[name]-[hash].js',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-bootstrap': 'ReactBootstrap',
                    '@base-ui/react': 'BaseUI',
                    '@mantine/hooks': 'MantineHooks',
                    '@chumsinc/ui-utils': 'ChumsUIUtils'
                }
            }
        }
    }
});
