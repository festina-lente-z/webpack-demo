const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.jpg$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  // module--当webpack不知道怎么打包一个模块的时候就到模块配置里面找
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}