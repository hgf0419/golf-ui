<template>
  <div id="app">
    <div class="nav">
      <a v-for="item in menus" :key="item.name" @click="change_menu(item)">{{
        item.name
      }}</a>
    </div>

    <!-- 动态组件 -->
    <div class="main" :style="{background:bg}">
      <div class="">
        <view-hello v-show="menu == 'hello'"></view-hello>

        <view-button v-show="menu == 'button'"></view-button>
        <view-panel v-show="menu == 'panel'"></view-panel>
        <view-bar v-show="menu == 'bar'"></view-bar>
        <view-msg v-show="menu == 'msg'"></view-msg>
      </div>
    </div>

    <div class="btn-option">
      <g-button shape="circle" v-for="b in btns" :key="b.bg" @click="change_bg(b)">{{b.name}}</g-button>
    </div>
    
  </div>
</template>

<script>


import cfg from "./views/cfg.json";


import viewHello from "./views/view-hello.vue";
import viewButton from "./views/view-button.vue";
import viewPanel from "./views/view-panel.vue";
import viewBar from "./views/view-bar.vue";
import viewMsg from "./views/view-msg.vue";

export default {
  name: "App",
  components: {
    viewHello,
    viewButton,
    viewPanel,
    viewBar,
    viewMsg,
  },
  data() {
    return {
      menus: cfg.menus,
      menu: "",
      btns:[
        {bg:'#eee',name:'灰'},
        {bg:'#fff',name:'白'}
      ],
      bg:'#fff'
    };
  },
  methods: {
    change_menu(r) {
      this.menu = r.name;
    },
    change_bg(r){
      this.bg=r.bg;
    }
    
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
  height: calc(100vh - 70px);
  overflow-y: auto;
}

/*  */
.line{
  margin-bottom: 10px;
}
.m-b{
  margin-bottom: 5px;
}

/*  */
.btn-option{
  position: absolute;
  top:60px;
  right: 10px;

}
</style>
