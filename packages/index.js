import Hello from './components/hello/index'
import Button from './components/button/index'
// import Panel from './components/panel/index'
import Msg from './components/msg/index'


const components = [
  Hello,
  Button,
  // Panel,

]

import mobile from './utils/mobile';

import focus from './directives/focus'
// 定义install方法
const install = function (Vue) {

  // 判断是否安装
  //if (install.installed) return

  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component);

  })

  // 添加实例方法
  Vue.prototype.$msg = Msg;
  Vue.prototype.$mobile = mobile;




  // 添加全局指令
  focus(Vue);


}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出
export default {
  install,// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  version: '0.1.0',
  ...components

}
