const path = require('path')
module.exports = {
    entry: "./src/index.js", //入口路径
    output: { //出口文件
        filename: "bundle.js",// 文件名
        path: path.resolve(__dirname,"./dist"),
        publicPath: "./dist/", // 静态文件引用路径，http://127.0.0.1:5500/webpack5/dist/xx.jpg
    },
    mode: "none", //生产环境
    module: {
        rules: [
            {test: /\.(jpg|png)$/i,use:["file-loader"]},
            {test: /\.css$/,use:["style-loader","css-loader"]}
        ]
    }
}