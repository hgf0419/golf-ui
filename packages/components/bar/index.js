import Bar from './src/main.vue';

Bar.install = function (Vue) {
  Vue.component(Bar.name, Bar);
};

export default Bar;