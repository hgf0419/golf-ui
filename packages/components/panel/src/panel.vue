<template>
  <div class="p-panel" :class="[`p-panel-${type}`,{
    'is-straight':straight
  }]">
      <div class="p-panel-head">
          <slot name="head"></slot>
          <span v-if="title">{{title}}</span>
      </div>
      <div class="p-panel-body">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'pPanel',
    props:{
        type: {
            type: String,
            // 设置默认值：如果不传值，那么使用default
            default: ''
        },
        straight: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
    }
}
</script>

<style lang="scss" scoped>
  $primary:#1c84c6;
  $success:#1ab394;
  $info:#d2e3ff;

.p-panel{
    margin-bottom: 10px;
    .p-panel-head{
        padding: 10px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        border-bottom: none;
    }
    .p-panel-body{
        padding: 10px;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border: 1px solid #ddd;
    }
}

.p-panel-primary{
    .p-panel-head{
        color:#fff;
        background-color: $primary;
        border-color:$primary
    }
    .p-panel-body{
        border-color:$primary;
    }
}
.p-panel-success{
    .p-panel-head{
        color:#fff;
        border: 1px solid $success;
        background-color: $success;
    }
    .p-panel-body{
        border-color:$success;
    }
}
.p-panel-info{
    .p-panel-head{
        border: 1px solid $info;
        background-color: $info;
    }
    .p-panel-body{
        border-color:$info;
    }
}

// straight属性
.p-button.is-straight{
  border-radius: 0;
}
.p-panel.is-straight{
    .p-panel-head{
       border-radius: 0;
    }
    .p-panel-body{
        border-radius: 0;
    }
}
</style>