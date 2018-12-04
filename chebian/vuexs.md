# 全局数据管理

## 开单主体

store/order.js

```js
  mianObject:{
    member:{}, // 人物信息
    motor:{} // 车辆信息
  }
  // 全局唯一
  // 无数据则为 null或undefined
```
## 订单基本信息
```js
  orderInfo: {
    // 接车单信息
    senderName: '',
    senderMobile: '',
    attachment: '',
    // 订单基本信息
    memberCardPwd: '', // TIP: 划卡多一个密码字段
    orderNoHand: '',
    // orderNo: '',
    motorMileCurrent: '', // 当前里程
    startTime: '',
    sellEmployee: '',
    'memberCard.id': '',
    remarks: '',
    id: '' // 订单的id
  }, // 包含接车单信息 订单基本信息 排除客户信息和购物车
  shopCar: [], // 用户选择过的购物车
```
## 开单业务流程

1.进入客户车辆页面 orderSearch.vue
> 进入页面后判断进入的来源
如果是从首页进来的需要清空开单的全局状态 this.$store.dispatch('clearOrder')

