## 什么是loader
### loader作用
webpack不能识别非js结尾的文件，就需要配合loader将这些文件识别出来，并进行打包。
webpack默认知道如何打包js文件，但是不知道如何打包jpg文件，所以需要在配置文件中告诉webpack该如何打包jpg结尾的文件。所以我们在module中进行如下配置：rules属性是打包规则，它是数组形式的。使用一个loader帮助我们打包，这里使用file-loader。
安装file-loader`npm install file-loader -D`
```javascript
const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.jpg$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
运行`npm run bundle`进行打包，webpack安装及配置可以看前文。
`file-loader`做了哪些工作？
- 首先按照rules中test设置的匹配规则，把符合条件的文件打包移动到dist目录下
- 把打包后的文件名作为返回值返回到引入模块的变量中

```javascript
import imga from './a.jpg';

var img = new Image();
img.src = imga;

var root = document.getElementById('root');
root.append(img);
```
## 使用Loader打包静态资源（图片篇）
在使用loader时，可以在options中配置一些参数：
- 新打包出来的图片的名字与后缀和原图片一致
  ```javascript
  options: {
    name: '[name].[ext]'
  }
  ```
  `[name]`和`[ext]`都是占位符，想了解更多可以去官网看[Placeholders](https://v4.webpack.js.org/loaders/file-loader/#placeholders)

  `test: /\.(jpg|png|gif)$/,`文件后缀符合jpg,png,gif则均可以进行打包

- 把图片打包到dist目录下的images文件夹中
  `outputPath: 'images/'`


