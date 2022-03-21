<template>
  <div
    class="g-panel"
    :class="[
      `g-panel--${type}`,
      {
        'is-straight': straight,
        'is-plain': plain,
      },
    ]"
  >
    <div class="head">
      <slot name="head"></slot>
      <span class="title" v-if="title">{{ title }}</span>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "g-panel",
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: "base",
    },
    straight: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/var.scss";

.g-panel { 
  margin-bottom: 15px;
  .head {
    padding: 10px 15px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    .title {
      font-size: 15px;
      font-weight: 600;
    }
  }
  .body {
    padding: 10px 15px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}


.g-panel--base {
  .head {
    background-color: $base;
    border: 1px solid $base_borderColor;
    border-bottom: none;
    .title{
      color: #000;
    }
  }
  .body{
    border: 1px solid $base_borderColor;
  }
}

.g-panel--primary {
  .head {
    background-color: $primary;
    color: #fff;
    border: 1px solid $primary;
    border-bottom: none;
  }
  .body{
    border: 1px solid $primary;
  }
}

// straight属性
.g-panel.is-straight {
  .head {
    border-radius: 0;
  }
  .body{
    border-radius: 0;
  }
}

// 朴素样式
.g-panel.is-plain {
  .head {
    background-color: #fff;
    .title{
      color: #000;
    }
  }
}
</style>