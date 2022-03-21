<template>
  <div
    class="g-bar"
    :class="[
      `g-bar--${type}`,
    ]"
    :style="colorStyle"
  >
    <div class="title">{{ title || "" }}</div>
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "g-bar",
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "base",
    },
    color: {
      type: String,
      default: "",
    },
  },
  computed:{
    colorStyle(){
      let color=this.color||'';
      if(!color){
        return "";
      }
      return {'borderLeft':'5px solid '+color,};
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/var.scss";
.g-bar {
  background: #fff;
  padding: 10px 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 46px;
  box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
}
.g-bar--base {
  border-left: 5px solid $base;
}

.g-bar--primary {
  border-left: 5px solid $primary;
}

</style>