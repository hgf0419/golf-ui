<template>
  <div class="g__msg" :class="[prefixCls + '--' + type]" v-if="visible">
    <div :class="[prefixCls + '__content']">
      <span :class="[prefixCls + '__content__body']" v-html="content"></span>
      <span
        v-if="closable"
        :class="[prefixCls + '__content__icon']"
        @click="close()"
      >
        &times;
      </span>
    </div>
  </div>
</template>

<script>
const prefixCls = "g__msg";
export default {
  name: "g-msg",
  data() {
    return {
      prefixCls,
    };
  },
  mounted() {
    //do something after mounting vue instance
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
@import url("../../../styles/var.css");

.g__msg {
  width: 300px;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 20px;
}
.g__msg--info {
  background-color: var(--info);
  color: #fff;
}
.g__msg--primary {
  background-color: var(--primary);
  color: #fff;
}

.g__msg__content {
  min-height: 46px;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.g__msg__content__body {
  flex: 1;
}
.g__msg__content__icon {
  font-size: 20px;
  cursor: pointer;
}
</style>

