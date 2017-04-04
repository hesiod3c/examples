<template>
  <button :class="[type, size]"><slot></slot></button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
  }
}
</script>
<style lang="scss">
  @import '../../../scss/06-components/button.scss';
</style>
