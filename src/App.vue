<template>
  <div id="app">
    <div class="nav">
      <a v-for="item in menus" :key="item.name" @click="change(item)">{{
        item.name
      }}</a>
    </div>

    <!-- 动态组件 -->
    <div class="main">
      <div class="">
        <view-home v-show="menu == 'home'"></view-home>

        <view-hello v-show="menu == 'hello'"></view-hello>

        <view-button v-show="menu == 'button'"></view-button>
      </div>
    </div>
  </div>
</template>

<script>


import cfg from "./views/cfg.json";

import viewHome from "./views/view-home.vue";
import viewHello from "./views/view-hello.vue";
import viewButton from "./views/view-button.vue";

export default {
  name: "App",
  components: {
    viewHome,
    viewHello,
    viewButton,
  },
  data() {
    return {
      menus: cfg.menus,
      menu: "",
    };
  },
  methods: {
    change(r) {
      this.menu = r.name;
    },
  },
  mounted() {
    this.menu = this.menus[0].name;
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
}

.nav {
  height: 50px;
  line-height: 50px;
  background: #09f;
  text-align: center;
}
.nav a {
  margin: 10px;
  cursor: pointer;
}

.main {
  padding: 10px;
  width: 80%;
  margin: 10px auto;
  border: 1px dashed #ddd;
}
</style>
