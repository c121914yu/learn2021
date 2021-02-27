const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtratPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require("webpack").container

module.exports = {
    entry: "./src/index.js", //单个入口路径
    output: { //出口文件
        filename: "[name].[contenthash].js",// 文件名
        path: path.resolve(__dirname,"./dist"),
        publicPath: "http://localhost:3000/", // 静态文件引用主机
    },
    mode: "production", //生产环境
    optimization: { // 第三方插件单独打包
        splitChunks: {
            chunks: "all",
            minSize: 3000 // 3000k以上全部单独打包
        }
    },
    module: {
        rules: [//加载器配置
            {
                test: /\.css$/,
                use: [
                    MiniCssExtratPlugin.loader, "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtratPlugin.loader,
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
        new TerserPlugin(),//压缩
        new MiniCssExtratPlugin({//css文件生成
            filename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin(),// 自动删除旧文件
        new HtmlWebpackPlugin({// 自动生成html文件1
            title: "ms-button",
            filename: "ms-button.html", //路径名
            template: "index.html", //参考模板
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