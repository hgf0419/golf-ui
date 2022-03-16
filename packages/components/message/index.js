import Vue from 'vue';
import Message from './src/message.vue';
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
const wrapId='wrap-message-'+new Date().getTime();
const MessageVueConstructor = Vue.extend(Message);

MessageVueConstructor.prototype.close = function() {
  var vm=this;
  this.$on('after-leave', _ => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el);
    }
    this.$destroy();
  });
  vm.visible = false;

};
const messageBox = (options = {}) => {
    if (Vue.prototype.$isServer) return;
    options = Object.assign({}, defaults, options);
    let instance = new MessageVueConstructor({
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

export default messageBox;

