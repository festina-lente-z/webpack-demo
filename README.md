## 📒 webpack学习笔记
### 1. shell命令
- `touch`同时创建多个文件
  ```shell
  touch {header.js,content.js,sidebar.js}
	```
- `mkdir`创建指定名称的目录
  ```shell
  mkdir lesson
	```
- `clear`清屏
### 2. `<script>`标签
- `<script>`标签加载顺序
  - `<script>`标签放在`<head>`里
    `<head>`中全部js代码都被下载、解析、执行完成以后才能开始呈现页面的内容。
  - `<script>`标签放在`<body>`里
    浏览器会并行加载script，但是执行是按照书写顺序执行的
### 3. ES Module
- `export default`语法
### 4. CommonJS模块引入规范
### 5. npm命令
- `npm init`｜`npm init -y`
  初始化项目，会生成一个package.json文件。
- `npm install`
### 6. webpack安装&卸载
- 全局安装(一般不推荐)
  `npm install webpack webpack-cli -g`
- 全局卸载
  `npm uninstall webpack webpack-cli -g`
- 在项目中安装(🔥推荐)
  `npm install webpack webpack-cli -D`
- 在项目中安装查看webpack版本号
  `npx webpack -v`
- 查看webpack历史版本
  `npm info webpack`
- 安装指定版本webpack
  `npm install webpack@4.16.5 webpack-cli -D`
### 7. webpack打包
- 打包命令 `npx webpack`
  ```javascript
  // webpack.config.js
  const path = require('path');
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
  ```
- 或者使用 `npm run bundle`(bundle为自己设置的命令)
  ```json
  "scripts": {
    "bundle": "webpack"
  },
  ```
- `webpack-cli`作用：可以使我们在命令行中使用`webpack`这个命令
### 8. webpack.config.js配置
- `npm install file-loader -D` 安装file-loader
## 💻 webpack练习demo

