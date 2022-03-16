<template>
  
    <div class="p__message" :class="[prefixCls + '--' + type]" v-if="visible">
      <div :class="[prefixCls + '__content']">
        <span :class="[prefixCls + '__content__body']" v-html="content"></span>
        <span v-if="closable" :class="[prefixCls + '__content__icon']" @click="close()">
          &times;
        </span>
      </div>
    </div>
</template>

<script>
const prefixCls = 'p__message';
export default {
  name:'pMessage',
  data(){
    return {
      prefixCls,
    }
  },
  mounted() {
    //do something after mounting vue instance
    
  },
  methods: {
    close() {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  
  $info:#d2e3ff;
  $primary:#1c84c6;
  $success:#1ab394;
  $warning:#f8ac59;
  $danger:#ed5565;

  .p__message{
    width: 300px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 20px; 
  }
  .p__message--info{
    background-color: $info;
    color:#333;
  }
  .p__message--primary{
    background-color: $primary;
    color:#fff;
  }
  .p__message--success{
    background-color: $success;
    color:#fff;
  }
  .p__message--warning{
    background-color: $warning;
    color:#fff;
  }
  .p__message--danger{
    background-color: $danger;
    color:#fff;
  }

  .p__message__content{
    min-height: 46px;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .p__message__content__body{
      flex:1;
    }
    .p__message__content__icon{
      font-size: 20px;
      cursor: pointer;
    }
  }
</style>

