<template>
    <select class="form-control" :class="Mclass[0]" v-model="selectedData" @change="updateSelect">
      <slot name="selectHeader">
         <option selected disabled value="">請選擇</option>
      </slot>
      <option :class="Mclass[1]" v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
</template>
<script>
export default {
  name: 'boostrapSelect',
  props: {
    Mclass: {
      type: Array,
      required: true
    },
    val: {
      type: Number,
      default: 5
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedData: ''
    }
  },
  methods: {
    updateSelect () {
      this.$emit('update:selected', this.selectedData)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
