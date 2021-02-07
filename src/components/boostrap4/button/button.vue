<template>
  <button type="button" class="btn btn-primary" :class="Mclass" @click="onClick">
    <slot>預設案紐</slot>
  </button>
</template>
<script>
export default {
  name: 'boostrapBtn',
  props: {
    Mclass: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
