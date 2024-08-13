import {merge} from 'webpack-merge';
import common from './webpack.common.mjs';
import {WebpackManifestPlugin} from 'webpack-manifest-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import path from "node:path";


export default merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {ecma: 8},
                    compress: {ecma: 5, warnings: false, inline: 2},
                    mangle: {safari10: true},
                    output: {ecma: 5, comments: false, ascii_only: true}
                },
                parallel: true,
                extractComments: false,
                // cache: true,
            })
        ],
    },
    resolve: {
        alias: {
            'react': path.resolve(process.cwd(), './node_modules/react'),
            'react-dom': path.resolve(process.cwd(), './node_modules/react-dom'),
        }
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
        },
        'react-dim': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM',
        }
    },
    output: {
        filename: "[name].[contenthash].js",
    },

    plugins: [
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin({}),
    ]
});
