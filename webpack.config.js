let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {presets: ["es2015", "stage-0", "react"]},
                exclude: /node_modules/
            },
            {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./app/index.html"}),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
    ],
    devtool: "source-map",//可以提示源码错误而非bundle.js
    devServer: {
        hot:true,
        proxy: {
            "/api": "http://localhost:3000"
        }
    }
}