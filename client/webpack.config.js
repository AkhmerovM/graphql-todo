const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const paths = {
    public: path.resolve(__dirname, 'www'),
    build: path.resolve(__dirname, 'www/build'),
    src: path.resolve(__dirname, 'src'),
};
const styleLoader = {
    loader: isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
};
const cssModuleLoader = {
    loader: 'css-loader', options: { modules: true },
};
const cssLoader = {
    loader: 'css-loader', options: { modules: false },
};
const postCssLoader = {
    loader: 'postcss-loader',
};
const lessLoader = {
    loader: 'less-loader',
};
// const typingCssModulesLoader = {
//     loader: 'typings-for-css-modules-loader',
//     options: {
//         modules: true,
//         namedExport: true,
//     },
// };
const SvgrWebpackLoader = {
    loader: '@svgr/webpack',
    options: {
        svgoConfig: {
            plugins: {
                removeViewBox: false,
            },
        },
    },
};
module.exports = {
    context: paths.src,
    entry: {
        main: './index.tsx',
    },
    output: {
        path: paths.build,
        filename: '[name].min.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                exclude: /\.local\.css/u,
                test: /\.css$/u,
                use: [styleLoader, cssLoader, postCssLoader],
            },
            {
                test: /\.local\.css/u,
                use: [styleLoader, cssModuleLoader, postCssLoader],
            },
            {
                exclude: /\.local\.less$/u,
                test: /\.less$/u,
                use: [styleLoader, cssLoader, postCssLoader, lessLoader],
            },
            {
                test: /\.local\.less/u,
                use: [styleLoader, cssModuleLoader, postCssLoader, lessLoader],
            },
            // { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    // 'babel-loader',
                    'ts-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: [SvgrWebpackLoader, 'url-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: path.join('images', '[hash:10].[name].[ext]'),
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/u,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:10].[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'source-map',
    watch: isDev,
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
        modules: [paths.src, 'node_modules'],
        alias: {
            '@': paths.src,
        },
    },
    devServer: {
        contentBase: paths.public,
        compress: true,
        historyApiFallback: true,
        port: 5003,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: 'Webpack App', template: path.join(paths.src, './index.html') }),
        new MiniCssExtractPlugin({ filename: '[name].min.css' }),
    ],
    optimization: {
        minimize: isProd,
        splitChunks: {
            automaticNameDelimiter: '.',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

};
