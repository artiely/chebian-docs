(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{64:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"全局管理的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局管理的状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局管理的状态")]),a("h2",{attrs:{id:"顾客的几种状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顾客的几种状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 顾客的几种状态")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  orderOfCustom"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 当前的操作的客户下面是没有车信息的（一个人对应多辆车）")]),t._v("\n  orderOfCar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 当前操作的车如果归属于某个客户下面就有客户的信息")]),t._v("\n  newCustomTel"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 当前新建的客户手机号")]),t._v("\n  newCustomCar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 当前新建的车牌号")]),t._v("\n")])]),a("p",[t._v("以上 4 种状态同时只可能存在一种")]),a("h2",{attrs:{id:"组件-order-custom-的几种状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件-order-custom-的几种状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件 order-custom 的几种状态")]),a("ol",{attrs:{start:"0"}},[a("li",[t._v("待选择状态")]),a("li",[t._v("有客户有车辆")]),a("li",[t._v("只有客户")]),a("li",[t._v("只有车辆")]),a("li",[t._v("无客户信息")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("介绍")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("placeholder")]),a("td",[t._v("选择的提示文本内容")]),a("td",[t._v("String")]),a("td",[t._v("-")]),a("td",[t._v("选择车辆/客户")])]),a("tr",[a("td",[t._v("noCus")]),a("td",[t._v("表示当前是否有客户信息")]),a("td",[t._v("Boolean")]),a("td",[t._v("-")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("data")]),a("td",[t._v("自定义当前客户的信息")]),a("td",[t._v("Object")]),a("td",[t._v("-")]),a("td",[t._v("-")])]),a("tr",[a("td",[t._v("required")]),a("td",[t._v("当前 placeholder 是否显示必填*符号")]),a("td",[t._v("Boolean")]),a("td",[t._v("-")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("search")]),a("td",[t._v("当前切换去的页面")]),a("td",[t._v("String")]),a("td",[t._v("searchCar/searchCus/search")]),a("td",[t._v("searchCar")])]),a("tr",[a("td",[t._v("nolink")]),a("td",[t._v("是否展示切换的按钮")]),a("td",[t._v("Boolean")]),a("td",[t._v("-")]),a("td",[t._v("false")])])])]),a("h2",{attrs:{id:"订单信息-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#订单信息-state","aria-hidden":"true"}},[t._v("#")]),t._v(" 订单信息 state")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" orderInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 接车单信息")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'receptionOrder.senderName'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'receptionOrder.senderMobile'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'receptionOrder.motorTotalMile'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'receptionOrder.question'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'receptionOrder.suggest'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'receptionOrder.expectTime'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'receptionOrder.remarks'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'receptionOrder.id'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 订单基本信息")]),t._v("\n    orderNoHand"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    startTime"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("moment")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH:mm:ss'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sellEmployee"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    remarks"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 是否是划卡单")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'memberCard.id'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    memberCardPwd"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// TIP: 划卡多一个密码字段")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 订单的id")]),t._v("\n    id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),a("h2",{attrs:{id:"退出登录action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出登录action","aria-hidden":"true"}},[t._v("#")]),t._v(" 退出登录action")]),a("p",[t._v("当前登录者退出登录的方法 "),a("code",[t._v("logout")]),t._v(" 返回一个Promise")]),a("p",[t._v("示例")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'logout'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("功能说明：退出登录去清楚_vuex的全部状态和_token_(当前登陆者的id)并刷新页面")])])}],!1,null,null,null);s.default=r.exports}}]);