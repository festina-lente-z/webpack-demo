const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js',
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
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
}