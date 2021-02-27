# webpack5

## 1. 基础知识

需要安装 webpack webpack-cli
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

## 2. 各种加载器

- 图片加载器 - file-loader
- css 加载器 - style-loader,css-loader
- sass 加载器 - style-loader,css-loader,sass-loader ,另外还需要安装 node-sass

## 3. plugin

1. 压缩功能
2. css 文件分离
3. 自动生成 HTML 文件

## 4. 生产模式与开发模式

生产模式下无法调试，可以实现代码加密。
process.env.NODE_EN 获取环境变量
webpack-serve - 自动重载打包

## 5. 多文件打包

### 打包多个 js 文件和 css 文件：

```json
entry: { //多个入口文件
    "ms-button": "./src/ms-button.js",
    "ms-img": "./src/ms-img.js"
},
filename: "[name].[contenthash].js",// 根据入口取文件名
```

### 打包多个 html 文件，实现组件化

- <%= htmlWebpackPlugin.options.title %> - 获取环境的 title

### 打包多个单独项目

```json
new HtmlWebpackPlugin({
	// 自动生成html文件1
	"title": "ms-button", //标题名
	"filename": "ms-button.html", //路径名
	"template": "index.html", //参考模板
	"chunks": ["ms-button"], //筛选对应的js
	"meta": {
		"description": "ms-button"
	}
})
```

## 6. 外部库引入优化

有时候引入外部库（例如 lodash）时仅用到少数方法，此时如果全部引入会导致文件大小过大，此时可以利用**optimization**对引用部分打包。
其会对第三方库单独打包，而不是引入每一个 js 文件。

## 7. 与 expres 共用

```js
app.use("/static",express.static(path.resolve(__dirname,"../dist"))) //指定静态路径以/static开头
publicPath: "/static/", // 静态文件引用路径
```

## 8. 代码共享模块

```js
const { ModuleFederationPlugin } = require("webpack").container
/* 暴露外部 */
new ModuleFederationPlugin({
	name: "MsButtonApp",
	filename: "remoteEntry.js",
	exposes: {
		"./MsButton": "./src/components/MsButton/ms-button.js",
	},
})
/* 接收 */
new ModuleFederationPlugin({
	name: "MsImageApp",
	remotes: {
		MsButtonApp: "MsButtonApp@http://localhost:3000/remoteEntry.js",
	},
})

/* 引用 */
import("MsButtonApp/MsButton").then((MsButtonMoule) => {
	const MsButton = MsButtonMoule.default //拿到类
	const msButton = new MsButton()
	msButton.render()
})
```
