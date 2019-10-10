const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/js/index.js'],
        retro: ['babel-polyfill', './src/js/retro.js'],
        weekly: ['babel-polyfill', './src/js/weekly.js'],
        wiki: ['babel-polyfill', './src/js/wiki.js']
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: "js/[name].bundle.js"
    },
    devServer: {
        contentBase: './docs'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'retro.html',
            template: './src/retro.html',
            chunks: ['retro']
        }),
        new HtmlWebpackPlugin({
            filename: 'weekly.html',
            template: './src/weekly.html',
            chunks: ['weekly']
        }),
        new HtmlWebpackPlugin({
            filename: 'wiki.html',
            template: './src/wiki.html',
            chunks: ['wiki']
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
