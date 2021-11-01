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
  
