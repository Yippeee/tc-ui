const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'poster.min.js',
        path: path.resolve(__dirname, './build'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(jpg|png|woff|ttf)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
        }),
        new VueLoaderPlugin()
    ],
    context: __dirname,
    devtool: '#eval-source-map'
}