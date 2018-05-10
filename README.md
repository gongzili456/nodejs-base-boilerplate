# 项目模板

## How to run

Develop on your local env:

`yarn dev` used docker or not `yarn debug-local`

## 项目目录

```
├── .babelrc
├── .eslintignore
├── .eslintrc.yml
├── .git-commit-template
├── .gitignore
├── README.md
├── app
│   ├── controllers
│   │   └── .gitkeep
│   ├── index.js
│   ├── models
│   │   └── .gitkeep
│   └── routers
│       ├── index.js
│       └── other.js
├── config
│   ├── development.yml
│   ├── production.yml
│   └── staging.yml
├── index.js
├── package.json
└── yarn.lock
```

* package.json: 项目描述文件
* app: 所有业务逻辑代码
  * controllers: 控制器层目录
  * modles: 数据模型层目录
  * routers: 路由目录
  * index.js: 业务代码主文件
* config: 项目配置目录
  * development.yml: 开发环境配置文件
  * production.yml: 生产环境配置文件
  * staging.yml: 预生产环境配置文件
* index.js: 项目主文件
* .babelrc: Babel 配置文件，定义 ES5 转义规则
* .eslintrc.yml: Eslint 配置文件， 定义代码书写规范
* .eslintignore: Eslint 忽略配置文件， 定义 Eslint 排除的目录
* .git-commit-template: git commit message 模板文件
* .gitignore: Git 忽略目录的配置文件
* .README.md: 项目文档

## VSCode 配置

安装 `Prettier-Code formatter` 插件

使用 `CMD + ,` 打开 VSCode 的配置界面, 在 `USER SETTINGS` 栏里面输入下面配置

```
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "prettier.eslintIntegration": true,
  "prettier.trailingComma": "all",
  "prettier.singleQuote": true,
  "prettier.semi": false
```

## 代码提交

将 `git commit teplate` 配置项目中

```
git config commit.template .git-commit-template
```

以后每次提交的时候只输入

```
git commit
```

然后使用 `vim` 编辑文件, 保存退出后即可提交
