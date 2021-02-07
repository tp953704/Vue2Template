<template>
   <input type="text" @input="handleInputChange" v-model="inputValue" class="form-control" :class="Mclass[0]" :placeholder="Mplaceholder" aria-label="Mplaceholder" aria-describedby="Mplaceholder">

</template>
<script>
export default {
  name: 'boostrapInput',
  props: {
    Mclass: {
      type: Array,
      required: true
    },
    Mplaceholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInputChange () {
      this.$emit('update:value', this.inputValue)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
