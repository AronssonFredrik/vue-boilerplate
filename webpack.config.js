const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: {
        vue: 'vue',
        index: path.join(__dirname, 'src', 'app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ['vue-style-loader', {
                            loader: 'css-loader'
                        }],
                        js: ['babel-loader']
                    },
                    cacheBusting: true
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css|sass|scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8010,
        compress: true,
        open: false,
        watchOptions: {
            ignored: /node_modules/,
            poll: true
        },
        publicPath: '/dist/',
        contentBase: path.resolve('src/assets'),
        watchContentBase: true
    },
    plugins: [new VueLoaderPlugin()]
};