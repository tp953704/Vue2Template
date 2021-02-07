<template>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="radio" value="option1" v-model="checkItem" checked>
      <label class="form-check-label" for="exampleRadios1">
        Default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" value="option2" v-model="checkItem">
      <label class="form-check-label" for="exampleRadios2">
        Second default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" value="option3" v-model="checkItem" disabled>
      <label class="form-check-label" for="exampleRadios3">
        Disabled radio
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'boostrapCheckgroup',
  data () {
    return {
      checkItem:''
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
  watch:{
    checkItem: function(newValue) {
        this.$emit('update:value', newValue)
    },
  }

}
</script>
<style lang="scss" scoped>


</style>
