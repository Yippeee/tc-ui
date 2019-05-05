const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './main.js',
    output: {
        filename: 'poster.min.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: { // 将第三方模块提取出来
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10, // 优先
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
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
        new ExtractTextPlugin("styles.css"),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new WebpackCdnPlugin({
            modules: [
                {
                    name: 'vue',
                    var: 'Vue',
                    path: 'dist/vue.runtime.min.js'
                },
                {
                    name: 'vue-router',
                    var: 'VueRouter',
                    path: 'dist/vue-router.min.js'
                },
                {
                    name: 'element-ui',
                    var: 'ElementUI',
                    style: 'lib/theme-chalk/index.css',
                    path: 'lib/index.js'
                }
            ],
            publicPath: '/node_modules'
        })
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