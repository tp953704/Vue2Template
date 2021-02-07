<template>
  <div class="progress" :class="Mclass[0]">
    <div class="progress-bar" :class="Mclass[1]" :style="'width:'+ val+'%;'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</template>
<script>
export default {
  name: 'boostrapProgress',
  props: {
    Mclass: {
      type: Array,
      required: true
    },
    val: {
      type: Number,
      default: 5
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
