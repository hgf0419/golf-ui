// 使用异步函数也是可以的

import GolfUI from '../../packages/index'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
  }) => {
    // ...做一些其他的应用级别的优化
    Vue.use(GolfUI);
  }