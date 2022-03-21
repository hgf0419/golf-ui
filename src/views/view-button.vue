<template>
  <div>
    <div class="m-b">type</div>
    <div class="line">
      <g-button>测试按钮</g-button>
      <g-button type="primary">测试按钮</g-button>
    </div>

    <div class="m-b">plain</div>
    <div class="line">
      <g-button plain>测试按钮</g-button>
      <g-button type="primary" plain>测试按钮</g-button>
    </div>

    <div class="m-b">straight</div>
    <div class="line">
      <g-button straight>测试按钮</g-button>
      <g-button type="primary" straight>测试按钮</g-button>
    </div>

   
    <div class="m-b">size</div>
    <div class="line">
      <g-button size="small">测试按钮</g-button>
      <g-button>测试按钮</g-button>
      <g-button size="large">测试按钮</g-button>
    </div>

    <div class="m-b">shape</div>
    <div class="line">
      <g-button shape="ellipse">测试按钮</g-button>
      <g-button shape="square">测试</g-button>
      <g-button shape="circle">测试</g-button>
    </div>

    <div class="m-b">disabled</div>
    <div class="line">
      <g-button disabled>测试按钮</g-button>
      <g-button disabled type="primary">测试按钮</g-button>
    </div>
    <div class="m-b">自定义颜色 bg/color</div>
    <div class="line">
      <g-button bg="#f90">测试按钮</g-button>
      <g-button bg="linear-gradient(to right, #ff6034, #ee0a24)">测试按钮</g-button>
      <g-button color="#09f">测试按钮</g-button>
      <g-button bg="#f90" color="#f00">测试按钮</g-button>
      
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