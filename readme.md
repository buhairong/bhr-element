安装 storybook
npx -p @storybook/cli sb init --type vue
yarn add vue
yarn add vue-loader vue-template-compiler --dev



开启 yarn 工作区
项目根目录的 package.json
"private": true,
"workspaces": [
  "packages/*"
]

yarn workspaces 使用
给工作区根目录安装开发依赖
yarn add jest -D -W

给指定工作区安装依赖
yarn workspace lg-button add lodash@4

给所有的工作区安装依赖
yarn install



Lerna 介绍
Lerna 是一个优化使用 git 和 npm 管理多包仓库的工作流工具
用于管理具有多个包的 JavaScript 项目
可以一键把代码提交到 git 和 npm 仓库

Lerna 使用
全局安装  yarn global add lerna
初始化   lerna init
发布  lerna publish



安装组件测试环境
安装依赖
Vue Test Utils
Jest
vue-jest
babel-jest

安装：
yarn add jest @vue/test-utils vue-jest babel-jest -D -W

vue-jest 当前依赖的是 babel6, 需要安装 babel 桥接
yarn add babel-core@bridge -D -W



安装 Rollup 和 插件
rollup
rollup-plugin--terser   对代码进行压缩
rollup-plugin-vue@5.1.9   把vue单文件组件编译成 js 代码
vue-template-compiler
@rollup/plugin-json  把 json 文件作为模块加载
rollup-plugin-postcss
@rollup/plugin-node-resolve 打包过程中，将依赖的第三方包一起打包进来


yarn add rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 vue-template-compiler @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W

yarn workspace lg-button run build


设置环境变量
cross-env  跨平台设置环境变量
yarn add cross-env -D -W

rimraf 清理指定文件夹
yarn add rimraf -D -W



基于模板生产组件基本结构
yarn add plop -D -W