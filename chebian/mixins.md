# 混合

## 固定方法
有长列表的页面获取数据的方法固定为`getData()` 参数固定为 `query:{}` 上拉加载固定方法 `onPullingDown` 下拉刷新固定方法 `onPullingUp`
滚动加载组件 参考：https://didi.github.io/cube-ui/#/zh-CN/docs/scroll
<cube-scroll ref="scroll" :data="data" @pulling-up="onPullingUp" :options="options" @pulling-down="onPullingDown"></cube-scroll>
## common/minxins/scroll
scroll.js封装固定上拉下拉等函数