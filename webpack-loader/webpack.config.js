const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          // placeholders占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/'
        }
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}