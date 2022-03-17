import Vue from 'vue';
import Msg from './src/main.vue';
const defaults = {
    visible:false,
    content:undefined,
    duration:'3',
    type:'info',
    closable:false,
    top:20,
    iconType:''
};
const typeMap = {
  "info":'icon-info',
  "error":'icon-heart-broken',
  "warning":'icon-stopwatch',
  "success":'icon-checkmark-outline'
}
const wrapId='wrap-msg-'+new Date().getTime();
const MsgVueConstructor = Vue.extend(Msg);

MsgVueConstructor.prototype.close = function() {
  var vm=this;
  this.$on('after-leave', _ => {
    console.log(_);
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el);
    }
    this.$destroy();
  });
  vm.visible = false;

};
const msgBox = (options = {}) => {
    console.log(1);
    
    options = Object.assign({}, defaults, options);
    console.log(options);
    let instance = new MsgVueConstructor({
      el: document.createElement('div'),
      data: options
    });
    if(!instance.type||!instance.content){return false}
    
    var wrap=document.getElementById(wrapId);
    //创建一个容器 用于append
    if(!wrap){
      var styleArr = [
          'width:300px',
          'position:fixed',
          'z-index:99999',
          'top:20px',
          'left:50%',
          'margin-left:-150px',
      ];
      // style
      var styleStr = styleArr.join(';');
      wrap=document.createElement('div');
      wrap.id=wrapId;
      wrap.style=styleStr;
      document.body.appendChild(wrap);
    } 

    wrap.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
      instance.iconType = typeMap[instance.type]
      // if duration is 0 means can't close
      if(instance.duration!=0){
        setTimeout(function(){
          instance.close();
        },options.duration*1000)
      }
    });
    return instance;
  };

export default msgBox;

