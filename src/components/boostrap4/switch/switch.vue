<template>
  <div class="custom-control custom-switch">
    <input type="checkbox" @change="handleCheckChange" v-model="checkValue" class="custom-control-input" id="customSwitch1">
    <label class="custom-control-label" for="customSwitch1">
      <slot name="switchText">
        123
      </slot>
    </label>
  </div>
</template>
<script>
export default {
  name: 'boostrapSwitch',
  data () {
    return {
      checkValue:false
    }
  },
  props: {
    Mclass: {
      type: Array,
      required: true,
      default: function () {
        return Array(2).fill('')
      }
    }
  },
  methods: {
    handleCheckChange () {
      this.$emit('update:value', this.checkValue)
    }
  }
}
</script>
<style lang="scss" scoped>


</style>
