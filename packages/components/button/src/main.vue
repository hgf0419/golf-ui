
<template>
  <button
    class="g-button"
    :class="[
      type ? 'g-button--' + type : '',
      size ? 'g-button--' + size : '',
      shape ? 'g-button--' + shape : '',
      {
        'is-plain': plain,
        'is-straight': straight,
        'is-disabled': disabled,
      },
    ]"
    :style="get_style"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="`g-icon-${icon}`"></i>
    <!-- 如果没传入文本插槽，则不显示span内容 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
 
<script>
export default {
  name: "g-button",
  // 此时对props进行校验，值接收string类型的type值
  props: {
    type: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: "base",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    straight: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: "",
    },

    shape: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
  created() {
    // 显示所有插槽
    // console.log(this.$slots)
  },
  computed: {
    get_style() {
      const bg=this.bg;
      const color=this.color;
      if (bg || color) {
        return {
          background: bg,
          borderColor: bg,
          color: color||'#fff',
        };
      }else{
        return null;
      }
    },
  },
  methods: {
    // 定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
 
<style lang="scss">
@import "../../../styles/var.scss";

.g-button {
  height: 40px;
  line-height: 40px;
  padding: 0 24px;
  font-size: 14px;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  border-radius: 4px;
  border:1px solid transparent;
}
.g-button:hover {
  opacity: 0.8;
}
.g-button:active {
  opacity: 1;
}
.g-button--base {
  color: $base_color;
  background-color: $base_bg;
}
.g-button--primary {
  color: #fff;
  background-color: $primary;
}
.g-button--small {
  font-size: 12px;
  height: 34px;
  line-height: 34px;
  padding: 0 20px;
}
.g-button--large {
  font-size: 16px;
  height: 46px;
  line-height: 46px;
  padding: 0 28px;
}

/* 朴素按钮样式 */
.g-button--base.is-plain {
  background: #fff;
  border: 1px solid $base_bg;
}
.g-button--primary.is-plain {
  background: #fff;
  color: $primary;
  border: 1px solid $primary;
}

/* icon配套样式 */
.g-button [class*="g-icon-"] + span {
  margin-left: 5px;
}

/* disabled属性 */
.g-button.is-disabled {
  cursor: no-drop;
  opacity: 0.7;
}
/* straight属性 */
.g-button.is-straight {
  border-radius: 0;
}
/* ellipse */
.g-button--ellipse {
  border-radius: 40px;
}
/* square */
.g-button--square {
  width: 40px;
  padding: 0 !important;
  overflow: hidden;
}
/* circle */
.g-button--circle {
  width: 40px;
  padding: 0 !important;
  overflow: hidden;
  border-radius: 50%;
}

/* 间距 */
.g-button + .g-button {
  margin-left: 10px;
}
</style>