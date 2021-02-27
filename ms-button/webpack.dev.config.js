const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require("webpack").container

module.exports = {
    entry: "./src/index.js", //入口路径
    output: { //出口文件
        filename: "bundle.js",// 文件名
        path: path.resolve(__dirname,"./dist"),
        publicPath: "http://localhost:3001/", // 静态文件引用路径，http://127.0.0.1:5500/webpack5/dist/xx.jpg
    },
    mode: "development", //开发环境
    devServer: {
        contentBase: path.join(__dirname,"./dist"),
        compress: true,
        port: 3001,
        hot: true
    },
    module: {
        rules: [//加载器配置
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }, //还需要安装node-sass
            {
                test: /\.js$/, //兼容高版本js
                exclude: "/node_modules/", //除了noodemodules文件夹
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),// 自动删除旧文件
        new HtmlWebpackPlugin({// 自动生成html文件
            title: "ms-button",
            filename: "index.html", //路径名
            meta: {
                description: "ms-button"
            }
        }), 
        new ModuleFederationPlugin({
            name: "MsButtonApp",
            filename: "remoteEntry.js",
            exposes: {
                "./MsButton": "./src/components/MsButton/ms-button.js"
            }
        })
    ]
}