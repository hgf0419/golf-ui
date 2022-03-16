
<template>
  <button
    class="g-button"
    :class="[
      `g-button-${type}`,
      `g-button-${size}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-straight': straight,
      },
    ]"
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
      default: "",
    },
    size: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: "",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    straight: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    // 显示所有插槽
    // console.log(this.$slots)
  },
  methods: {
    // 定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
 
<style scoped>
@import url('../../../styles/var.css');


.g-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.g-button:hover {
  opacity: 0.9;
}
.g-button:active {
  opacity: 0.7;
}

.g-button-primary {
  color: #fff;
  background-color: var(--primary);
  border-color: var(--primary);
}

/* 朴素按钮样式 */
.g-button-primary.is-plain {
  background: #fff;
  border-color: var(--primary);
  color: var(--primary);
}

.g-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

/* circle属性 */
.g-button.is-circle {
  border-radius: 50%;
  padding: 12px;
  width: 40px;
  height: 40px;
  overflow: hidden;
}

/* icon配套样式 */
.g-button [class*="p-icon-"] + span {
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
.g-button-small {
  transform: scale(0.8);
}
.g-button-big {
  transform: scale(1.2);
}

/* 间距 */
.g-button + .g-button {
  margin-left: 10px;
}
</style>