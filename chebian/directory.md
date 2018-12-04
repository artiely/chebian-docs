## 功能简介
- 开单 
> [选客户->[选商品 or 选开单模板->自动生成商品 or 选择卡->选择卡内商品]->[修改商品信息 or 填写基本信息] -> [保存 or 结算]]
- 快单 
> [选客户->填写金额->填写基本信息->结算]
- 充值 
> [选择卡->选择客户->填写基本信息->结算] [新增卡->填写信息->保存]
- 办卡 
> [选择卡->选择客户->填写基本信息->结算] [新增卡->填写信息->保存]
- 记一笔
- 收支账本
- 优惠券
- 客户储值账户
- 客户卡列表
- 服务商品库
- 交班
- 开单模板
- 员工管理
- 角色管理
- 自动推送
- 精准推送
- 商家管理
- 短信充值
- 小程序管理
- 账户管理
- 消息中心
- 订单中心
- 客户车辆中心
- 个人中心
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

## 构建

```bash
# 开发模式
npm run dev 
# 打包测试
npm run build-test
node server.js
# 打包上线
npm run build
```

## store模块
```bash
│  index.js
│  mutation-types.js #全局mutations常量
│  
└─modules
        account.js  #储值账户相关
        cardActiveList.js # 卡活动列表相关
        chargeActiveList.js #充值活动列表相关
        editCardActive.js #编辑卡活动相关
        native.js #原生接口相关
        order.js    #开单相关
        orderTemp.js #开单模板相关
        salePeople.js #销售人
        store.js #店铺相关
        sys.js  #系统
        voice.js #语音
        
```

## 
