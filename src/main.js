import Vue from 'vue'
import App from './App.vue'

import PettyUI from '../packages/index'
Vue.use(PettyUI)

Vue.config.productionTip = false


console.log('[main]');
new Vue({
  render: h => h(App),
}).$mount('#app')
