<template>
  <div class="g-hello">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'g-hello',
  props: {
    text: {
      type: String,
      default: 'hello'
    }
  }
};
</script>
