<template>
  <div>
    <div class="line">
      <g-button>测试</g-button>
      <g-button type="primary">测试</g-button>
    </div>

   
    <div class="m-b">size</div>
    <div class="line">
      <g-button>测试</g-button>
      <g-button type="primary" size="small">测试</g-button>
      <g-button type="primary">测试</g-button>
      <g-button type="primary" size="big">测试</g-button>
    </div>

    <div class="m-b">plain</div>
    <div class="line">
      <g-button>测试</g-button>
      <g-button type="primary" plain>测试</g-button>
    </div>

    <div class="m-b">straight</div>
    <div class="line">
      <g-button straight>测试</g-button>
      <g-button straight type="primary">测试</g-button>
    </div>

    <div class="m-b">round</div>
    <div class="line">
      <g-button round>测试</g-button>
      <g-button round type="primary">测试</g-button>
    </div>

    <div class="m-b">circle</div>
    <div class="line">
      <g-button circle>测试</g-button>
      <g-button circle type="primary">测试</g-button>
    </div>

    <div class="m-b">disabled</div>
    <div class="line">
      <g-button disabled>测试</g-button>
      <g-button disabled type="primary">测试</g-button>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
    }
  }
};
</script>

<style scoped>
</style>