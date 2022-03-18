<template>
  <div>
    <div></div>

    <g-button @click="pop">msg</g-button>
  </div>
</template>

<script>
export default {
  methods:{
    pop(){
      this.$msg({content:123});
    }
  },
  mounted(){
    
  }
}
</script>

<style>

</style>