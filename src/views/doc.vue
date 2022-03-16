<template>
  <div>

    <div class="wrap">
      <div class="menu">
        <div> <router-link to="/doc/test">test</router-link></div>
        <div> <router-link to="/doc/hello">hello</router-link></div>

        
      </div>

      <div class="view">  
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrap{
  display:flex;
}
.menu{
  width:200px;
  padding: 10px;
}
.view{
  padding: 10px;
}
</style>