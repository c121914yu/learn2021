# webpack5

## 基础知识

默认配置：

1. 文件放在 src 目录下
2. index.html 作为入口
3. npx webpack 运行打包
4. 自定义文件名: webpack.config.js
5. 默认只会打包 js 和 json 文件，其他类型文件需要自定义加载器。
6. "build": "webpack" 配置快捷启动命令

webpack 的思路:

1. 需要一个入口文件(index.js)
2. 会生成一个出口文件（html 中引入改出口文件）
3. index.js 中会引用其他 js，css,img 等，除了 js 和 json 其他文件需要配置加载器。

## 各种加载器

- 图片加载器 - file-loader
- css 加载器 - style-loader,css-loader
