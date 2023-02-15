<template>
  <div
    class="gf-panel"
    :class="[
    type&&'gf-panel--' + type,
      {
        'no-divider': noDivider,
        'no-border': noBorder,
        'is-collapse': is_collapse,
      },
    ]"
  >
    <div class="gf-panel__header">
      <!-- slot:title -->
      <slot name="title">
        <!-- 默认内容 -->
        <div class="gf-panel__title">{{ title }}</div>
      </slot>

      <div>
        <span
          v-if="toggle"
          class="gf-panel__toggle"
          @click="is_collapse = !is_collapse"
        >         
          {{is_collapse?'&#8744;':'&#8743;'}}
        </span>
      </div>
    </div>

    <div class="gf-panel__body" v-if="!is_collapse">
      <!-- slot -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "gf-panel",
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    
    // 是否可切换
    toggle: {
      type: Boolean,
    },
    // 默认是否收起
    collapsed: {
      type: Boolean,
    },
    // 无边框
    noBorder: {
      type: Boolean,
      default: false,
    },
    // 无边框
    noDivider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    // 初始值
    let is_collapse = this.toggle ? this.collapsed : false;

    return {
      is_collapse,
    };
  },
};
</script>

<style lang="scss">
.gf-panel {
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 15px;
  position: relative;
  box-sizing: border-box;
  .gf-panel__header {
    color: #333;
    height: 40px;
    padding: 0 15px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .gf-panel__title {
      font-size: 15px;
      font-weight: 600;
    }
    .gf-panel__toggle {
      display: inline-block;
      padding: 1px 6px;
      border-radius: 4px;
      color: #666;
      background-color: #ddd;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .gf-panel__body {
    padding: 10px 15px;
    min-height: 40px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

.gf-panel--info .gf-panel__header{
  background-color: #d9edf7;
}

.gf-panel--white .gf-panel__header{
  background-color: #fff;
}

.gf-panel.no-divider .gf-panel__header {
  border-color: transparent;
}
.gf-panel.no-border {
  border: none;
}


.gf-panel.is-collapse {
  .gf-panel__header {
    border-bottom: none;
  }
}
</style>