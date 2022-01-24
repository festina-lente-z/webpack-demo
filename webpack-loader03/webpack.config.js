const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
    sub: './src/index.js',
  },
  module: {
    rules: [{
      test: /\.(woff|woff2|ttf)$/i,
      type: 'asset/resource'
    },{
      test: /\.scss$/,
      use: [
        'style-loader', 
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          }
        },
        'postcss-loader',
        'sass-loader',
      ]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  output: {
    publicPath: 'http://cdn.com.cn',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
}