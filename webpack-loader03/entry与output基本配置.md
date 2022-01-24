在打包多个文件时，entry和output应该如何配置？
```javascript
entry: {
  main: './src/index.js',
  sub: './src/index.js',
}
```
```javascript
output: {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist'),
  clean: true
},
```

希望打包后的src中js地址含有cdn域名
```javascript
output: {
  publicPath: 'http://cdn.com.cn',
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist'),
  clean: true
},
```

Guides -> Output Management