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
      this.$msg({content:123,type:'primary'});
    }
  },
  mounted(){
    console.log(this.$mobile());
  }
}
</script>

<style>

</style>