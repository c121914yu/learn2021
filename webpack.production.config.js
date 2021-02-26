const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtratPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: "./src/index.js", //单个入口路径
    entry: { //多个入口文件
        "ms-button": "./src/ms-button.js",
        "ms-img": "./src/ms-img.js"
    },
    output: { //出口文件
        // filename: "bundle.[contenthash].js",// 文件名
        filename: "[name].[contenthash].js",// 根据入口取文件名
        path: path.resolve(__dirname,"./dist"),
        publicPath: "", // 静态文件引用路径，http://127.0.0.1:5500/webpack5/dist/xx.jpg
    },
    mode: "production", //生产环境
    module: {
        rules: [//加载器配置
            {test: /\.(jpg|png)$/i,use:["file-loader"]},
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
            chunks: ["ms-button"],
            meta: {
                description: "ms-button"
            }
        }), 
        new HtmlWebpackPlugin({// 自动生成html文件2
            title: "ms-img",
            filename: "ms-img.html", //路径名
            template: "index.html", //参考模板
            chunks: ["ms-img"],
            meta: {
                description: "ms-img"
            }
        }),
    ]
}