// var webpack = require('webpack');

// let config = {
//     mode: 'none',
//     entry: {
//         index: ['./src/index.js']
//     }, // 所需js
//     output: {
//         path: __dirname, // 输出文件路径
//         filename: './dist/bundle.js' // 输出文件名称  已经在index.html中引用
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 use: {
//                     loader: 'babel-loader'
//                 },
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     devServer: {
//         inline: true,
//         hot: true,
//         noInfo: false,
//         hotOnly: true,
//         proxy: {
//             '/api': 'http://localhost:3000'
//         }
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(), // 添加
//         new webpack.NamedModulesPlugin() // 添加，官方推荐的帮助分析依赖的插件
//     ]
// };
// module.exports = config;
