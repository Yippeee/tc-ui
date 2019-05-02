const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './main.js',
    output: {
        filename: 'poster.min.js',
        path: path.resolve(__dirname, './dist'),
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
            test: /\.jsx?$/,
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
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['*', '.js', '.css', '.html', '.vue', '.less']
    },
    context: __dirname,

}
// cSpell: ignore devtool
if (isDevelopment && config.mode === 'development') { // 这个 devtool 体积非常的大啊,在production环境下一定不能打包
    config.devtool = '#eval-source-map'
} else {
    config.devtool = false
}

module.exports = config