`url-loader`可以实现`file-loader`所实现的一切功能
安装url-loader`npm install url-loader -D`
执行webpack打包命令后，图片没有被打包到dist目录下，但是网页上却显示出图片

url-loader会把图片转化成一个base64的字符串，然后直接放到bundle.js中，而不是单独生成一个图片文件。
用url-loader打包优点：图片打包到js中，不需要额外再去请求图片地址，节省请求图片的http请求。缺点：如果图片文件特别大，打包生成的js文件也会特别大，那么加载js的事件就会很长，所以在一开始很长时间里页面什么都无法显示。
url-loader最佳使用方式：如果一个图片非常小，那么这个图片以base64形式打包到js文件中是比较好的选择，减少http请求次数，从而节省时间。如果图片很大，就像file-loader一样把图片打包到dist目录下。可以在options中配置limit实现这种最佳使用方式。`limit: 2048`的意思是如果图片大小超过2KB，那么图片就会被打包到dist目录下；否则以base64形式打包到js文件中。

## 用Loader打包样式
安装
`npm install style-loader css-loader -D`
这里遇到了一个错误，因为style-loader最新版与当前我使用的webpack版本不匹配，这里要去github根据tag找到package.json中webpack的版本，可以参考文章[如何找到webpack对应的loader版本](https://juejin.cn/post/6898889812741210125)。我找到的是`npm install style-loader@2.0.0 css-loader@5.2.7 -D`

#### url-loader特点
当我们用`url-loader`打包一个`jpg`图片的时候，url-loader和file-loader不一样，url-loader会把图片转化成一个base64的字符串，然后直接放到bundle.js中，而不是单独生成一个图片文件。
- 优点：图片打包到js文件里面，加载好js之后图片就显示到页面上了，不用再额外去请求一个图片的地址，节省了一次http请求
- 问题：如果这个文件特别大，打包生成的js文件会特别大，那么加载js文件的时间会很长，所以在一开始很长的时间内，页面不显示内容
- 最佳使用方式：如果图片非常小，打包成base64则是非常好的选择；如果图片很大，则推荐使用file-loader打包图片
- `limit: 2048`的意思是如果图片大小超过2KB，那么图片就会被打包到dist目录下（像file-loader)；否则以base64形式打包到js文件中。
