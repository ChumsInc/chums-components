import {merge}  from 'webpack-merge';
import common from './webpack.common.mjs';
import path from 'node:path';

const localProxy = {
    target: 'http://localhost:8081',
    ignorePath: false,
    changeOrigin: true,
    secure: false,
};

export default merge(common, {
    entry: './tests/test.tsx',
    mode: 'development',
    devServer: {
        port: 8000,
        static: [
            {directory: path.join(process.cwd(), 'public'), watch: false},
            {directory: process.cwd(), watch: false}
        ],
        hot: true,
        proxy: [
            {context: ['/images'], ...localProxy},
        ],
        watchFiles: ['src/**/*', 'test/**/*'],
    },
    devtool: 'inline-source-map'
});
