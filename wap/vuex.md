# 全局管理的状态

## 顾客的几种状态

```js
  orderOfCustom: null, // 当前的操作的客户下面是没有车信息的（一个人对应多辆车）
  orderOfCar: null, // 当前操作的车如果归属于某个客户下面就有客户的信息
  newCustomTel: '', // 当前新建的客户手机号
  newCustomCar: '', // 当前新建的车牌号
```

以上 4 种状态同时只可能存在一种

## 组件 order-custom 的几种状态

0.  待选择状态
1.  有客户有车辆
1.  只有客户
1.  只有车辆
1.  无客户信息

| 参数        | 介绍                                | 类型    | 可选值                     | 默认值        |
| ----------- | ----------------------------------- | ------- | -------------------------- | ------------- |
| placeholder | 选择的提示文本内容                  | String  | -                          | 选择车辆/客户 |
| noCus       | 表示当前是否有客户信息              | Boolean | -                          | false         |
| data        | 自定义当前客户的信息                | Object  | -                          | -             |
| required    | 当前 placeholder 是否显示必填\*符号 | Boolean | -                          | false         |
| search      | 当前切换去的页面                    | String  | searchCar/searchCus/search | searchCar     |
| nolink      | 是否展示切换的按钮                  | Boolean | -                          | false         |

## 订单信息 state
```js
 orderInfo: {
    // 接车单信息
    'receptionOrder.senderName': '',
    'receptionOrder.senderMobile': '',
    'receptionOrder.motorTotalMile': '',
    'receptionOrder.question': '',
    'receptionOrder.suggest': '',
    'receptionOrder.expectTime': '',
    'receptionOrder.remarks': '',
    'receptionOrder.id': '',
    // 订单基本信息
    orderNoHand: '',
    startTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    sellEmployee: '',
    remarks: '',
    // 是否是划卡单
    'memberCard.id': '',
    memberCardPwd: '', // TIP: 划卡多一个密码字段
    // 订单的id
    id: ''
  },
```

## 退出登录action


当前登录者退出登录的方法 `logout` 返回一个Promise

示例
```js
this.$store.dispatch('logout').then()
```
功能说明：退出登录去清楚_vuex的全部状态和_token_(当前登陆者的id)并刷新页面
