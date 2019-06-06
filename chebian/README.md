# 项目结构
## 注释强调

> 变量及方法都应该写注释 复杂的业务逻辑 也在模块下的 readme.md 文件

## 模块声明

> 主模块按下列方式已文件或文件夹的方式陈列

### auth

> 鉴权 (登录 注册 忘记密码 体验 ...)

### financing

> 财务 (记一笔 Record-sum 交班 收支账本)

### live

> 现场 (开单 快单 充值 办卡 ...)

### marketing

> 营销 (小程序 优惠券 自动推送 宣传海报)

### setting

> 设置 (服务/商品 开单模板 预警设置 声音 免密 账户 店铺设置 角色 员工 ...)

### statement

> 报表 (报表 储值列表 办卡列表)

### store

> 商家 (充值 ...)

## 启动与构建

```bash
# 确保克隆主干最新代码
git clone ...

# 更新依赖
npm i

# 本地启动
npm run dev

# 本地开发测试 便于与原生联调
npm run dev-test

# 本地测试环境打包
npm run build-staging

# 线上测试环境打包
npm run build

# 发布上线打包
npm run build-release

```
## 项目结构

```js
├─dist  // 打包后的项目文件
│  └─static
│      ├─css
│      ├─fonts
│      ├─img
│      ├─js
│      ├─logoicon
│      └─setup
├─node_modules
├─public        //  静态资源
│  └─static
│      ├─js
│      ├─logoicon
│      └─setup
└─src       // 项目源码
    ├─api     // 请求管理
    │  └─modules
    ├─assets  // 资源
    │  ├─font
    │  ├─img
    │  ├─js
    │  └─style
    ├─common // 公共
    │  ├─directive // 指令
    │  ├─filter// 过滤器
    │  ├─mixins // 混合
    │  └─utils // 工具方法
    ├─components // 页面级组件
    ├─package // 无业务基础组件
    ├─router // 路由
    ├─skeleton // 骨架屏
    ├─store // 数据管理
    │  └─modules
    └─views // 视图
```

