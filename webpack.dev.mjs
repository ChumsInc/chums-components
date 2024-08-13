import {merge} from 'webpack-merge';
import common from './webpack.common.mjs';
import path from 'path';

export default merge(common, {
    entry: './tests/index.tsx',
    mode: 'development',
    devServer: {
        port: 8000,
        static: [
            {
                directory: path.join(process.cwd(), 'public'),
                serveIndex: true,
                watch: false,
            },
            {
                directory: path.join(process.cwd(), ''),
                watch: false,
            }
        ],
        hot: true,
        proxy: [
            {context: ['/api', '/images'], target: 'http://localhost:8081'}
        ],
        watchFiles: ['src/**/*'],
    },
    devtool: 'inline-source-map',
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
    ]
});
