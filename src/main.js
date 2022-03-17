import Vue from 'vue'
import App from './App.vue'

import GolfUI from '../packages/index'
Vue.use(GolfUI)

Vue.config.productionTip = false


console.log('[main]');
new Vue({
  render: h => h(App),
}).$mount('#app')
