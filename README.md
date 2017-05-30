## 项目技术栈
- react react-router4 redux react-redux
## 初始化package.json
```
$ yarn init -y
```
## webpack
```
$ yarn add webpack webpack-dev-server --dev
```
## babel
```
$ yarn install babel-core babel-loader bebel-preset-es2015 bebel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin --dev
```
## react
```
$ yarn add react react-dom redux react-redux react-router-dom
```
## fetch
```
$ yarn add es6-promise whatwg-fetch
```
## express
```
$ yarn add express
```
## scripts
```
"start","webpack-dev-server --port 5000 --open --progress --colors",
"build","webpack -p"
```

## 目录结构
- components 组件
- containers 页面组件，或者自己的subpage目录下
  - Home
    subpages
    index.js
- index.js 用来控制显示哪一个页面


## 项目
1. 项目初始化并配置webpack
2. 编写首页头部样式
3. 引入redux
4. 更新城市