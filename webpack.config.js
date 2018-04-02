 var path = require('path');
 var webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
     entry: './js/app.js',
     output: {
         //path: path.resolve(__dirname, 'build'),
         path:path.resolve('./dist'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },
             {
                test: /\.css/,
                loader:'style-loader!css-loader'
             }
         ]
     },
     plugins:[
        new htmlWebpackPlugin({
            template:'./index.html', //template参照文件来移动文件
            //生成路径：其可以获取output中的path属性
        })
    ],
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };