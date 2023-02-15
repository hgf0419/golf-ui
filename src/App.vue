<template>
  <div id="app">
    <div class="nav">
      <a v-for="item in menus" :key="item.name" @click="change_menu(item)">{{
        item.title
      }}</a>
    </div>

    <!-- 动态组件 -->
    <div class="main" :style="{background:bg}">
      <component :is="menu"></component>  
    </div>

    <div class="btn-option">
      <g-button shape="circle" v-for="b in btns" :key="b.bg" @click="change_bg(b)">{{b.name}}</g-button>
    </div>
    
  </div>
</template>

<script>


import cfg from "./views/cfg.json";

// 示例页面
import viewButton from "./views/view-button.vue";
import viewPanel from "./views/view-panel.vue";
import viewBar from "./views/view-bar.vue";
import viewMsg from "./views/view-msg.vue";

export default {
  name: "App",
  components: {
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
  margin: 10px 100px;
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
.title{
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
}

/*  */
.btn-option{
  position: absolute;
  top:60px;
  right: 10px;

}
</style>
