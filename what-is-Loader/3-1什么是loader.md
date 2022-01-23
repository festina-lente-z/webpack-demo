## 📝步骤
- `npm init -y`--使项目符合node规范
- 配置package.json
  - 添加`"private": true,`--项目是私有项目，不会被发布到npm线上仓库中
  - 删除`"main": "index.js",`--因为目前项目不会被外部引用，自己用没必要向外暴露js文件
  - 删除`scripts`标签中的内容，变成->`"scripts": {},`
- 安装webpack
  - 在项目中安装(🔥推荐)
    `npm install webpack webpack-cli -D`
  - 在项目中安装查看webpack版本号
    `npx webpack -v`
  - 查看webpack历史版本
    `npm info webpack`
  - 安装指定版本webpack
    `npm install webpack@4.16.5 webpack-cli -D`
- 创建webpack默认配置文件--webpack.config.js
- 图片打包后名字不变

#### webpack是什么？
#### 模块是什么？
#### webpack配置文件的作用是什么？

#### 打包的流程
- 首先在src目录下有一个index.js文件，要对这个文件进行打包，在命令行运行`npm run bundle`
- 在运行`npm run bundle`这个命令时，实际上在执行的是`package.json`中的
  ```json
  "scripts": {
    "bundle": "webpack"
  },
  ```
  运行bundle命令实际上就是在执行webpack
- 此时，webpack会到`webpack.config.js`中寻找自己的配置，根据配置来进行打包
- 当webpack在进行打包时，如果遇到js文件，webpack本身就知道该如何打包js文件
- 但是当webpack打包到`.jpg`图片文件时，webpack不知道如何打包该类型文件
- 但是因为在配置文件中配置了webpack该如何打包图片文件，利用`file-loader`进行图片打包

#### file-loader功能
- 当发现代码中引入了图片模块时，首先会把图片打包移动到`dist`目录下（这里会默认给图片更改名字，但是可以根据需求自定义更改的名字）
- 当把图片移动到dist目录下之后会得到该图片相对于dist目录的名称，然后把这个名称作为返回值，返回给引入模块的变量之中
  ```javascript
  import imga from './a.jpg';
  console.log(imga)
  // images/a_2e959fd7fcfee22f79325801cf33beb6.jpg
  ```
#### Loader是什么
Loader是一个打包的方案，它知道对于某个特定文件，webpack应该如何打包。

#### loader参数配置
使用loader时，可以配置一些参数，这些参数可以额外放到一个名字叫`options`的配置项里。
可以在参数`outputPath`中配置打包后文件存放的文件夹（dist目录下）。
```javascript
module: {
  rules: [{
    test: /\.(jpg|png|gif)$/,
    use: {
      loader: 'file-loader',
      options: {
        // placeholder 占位符
        name: '[name]_[hash].[ext]',
        // 将图片打包到images文件夹中
        outputPath: 'images/'
      }
    }
  }]
},
```