import Panel from './src/main.vue';

Panel.install = function (Vue) {
  Vue.component(Panel.name, Panel);
};

export default Panel;