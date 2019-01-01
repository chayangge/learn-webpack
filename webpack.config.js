const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件
module.exports = {
    entry: './src/index.js', // 入口文件
    output: { // webpack打包后出口文件
        filename: 'app.js', // 打包后js文件名称
        path: path.resolve(__dirname, 'dist') // 打包后自动输出目录
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'productions',
            template: './index.html',
            inject: true, // script标签插入位置：head body false
            minify: {
                removeAttributeQuotes: false
            }
            // chunks: ['app', 'main']  //多个script
        })
    ]
};
