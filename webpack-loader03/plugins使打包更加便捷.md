#### HtmlWebpackPlugin
会在打包结束后在指定打包文件夹（dist）中生成index.html文件，并把打包生成的js文件比如`bundle.js`自动注入到这个html文件中。

`HtmlWebpackPlugin`简化了HTML文件的创建，以便为你的webpack包提供服务。对于那些文件名中包含哈希值，并且哈希值会随着每次编译而改变的webpack包特别有用。

如果想用webpack插件，首先要引用webpack插件。然后再进行实例化。
`plugins: [new HtmlWebpackPlugin()]`

如何让打包后生成的html文件自动包含`<div id='root'></div>`？
- 首先在src目录下创建一个template(index.html)作为模板
  ```javascript
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
  ```

#### plugin作用
plugin可以在webpack运行到某个时刻的时候帮我们做一些事情。
plugin很像生命周期函数

#### CleanWebpackPlugin
希望在重新打包的时候，先把dist目录删除。
报错：TypeError: CleanwebpackPlugin is not a constructor
解决：https://stackoverflow.com/questions/56567930/typeerror-cleanwebpackplugin-is-not-a-constructor
```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins: [
    new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
    })
]

```
除此之外还可以用output的clean属性在生成文件之前清空output目录
```javascript
module.exports = {
  //...
  output: {
    clean: true, // 在生成文件之前清空 output 目录
  },
};
```