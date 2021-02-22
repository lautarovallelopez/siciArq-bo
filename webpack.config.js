/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
    AUTH_ENDPOINT, ENDPOINT, NODE_ENV, PORT, AUTH_LOGIN
} = process.env;

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            'webpack/hot/only-dev-server',
            './src/app'
        ],
        client: 'webpack-dev-server/client?http://localhost:3001'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.jsx', '.scss', 'json'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@components': path.resolve(__dirname, 'src/components'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@model': path.resolve(__dirname, 'src/model'),
            '@util': path.resolve(__dirname, 'src/util'),
            '@state': path.resolve(__dirname, 'src/state'),
            '@reutilizables': path.resolve(__dirname, 'src/reutilizables'),
            '@root': __dirname
        }
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js',
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                plugins: ['react-hot-loader/babel'],
                cacheDirectory: '.babel-cache',
                presets: ['@babel/preset-react']
            }
        }, {
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'node_modules/@indec')
            ],
            loader: 'babel-loader',
            options: {
                cacheDirectory: '.babel-cache'
            }
        }, {
            test: /\.s?css$/,
            use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            test: /\.css$/,
            use: ['css-hot-loader', 'style-loader', 'css-loader']
        }, {
            exclude: [
                /\.html$/,
                /\.(js|jsx)$/,
                /\.json$/,
                /\.s?css$/,
                /\.(jpg|png)/
            ],
            loader: 'url-loader',
            options: {name: '[name].[ext]', limit: 10000}
        }, {
            test: /\.(jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {name: '[name].[ext]'}
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            VERSION: JSON.stringify(require('./package.json').version),
            ENDPOINT: JSON.stringify(ENDPOINT),
            AUTH_ENDPOINT: JSON.stringify(AUTH_ENDPOINT),
            AUTH_LOGIN: JSON.stringify(AUTH_LOGIN),
            PROJECT_NAME: JSON.stringify(require('./package.json').name)
        }),
        new HtmlWebpackPlugin({
            title: require('./package.json').description,
            template: path.resolve('public', 'index.html'),
            favicon: 'public/images/favicon.png',
            inject: 'root',
            hash: true
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new MiniCssExtractPlugin({filename: '[name].css'})
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        host: 'localhost',
        inline: true,
        port: PORT,
        progress: true,
        disableHostCheck: true
    }
};
