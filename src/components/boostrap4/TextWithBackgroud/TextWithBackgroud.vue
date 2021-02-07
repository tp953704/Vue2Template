<template>
  <div class="textWithBackground" :class="Mclass[0]">
      <span class="textWithBackground_content" :class="Mclass[0]">
        <slot>愈加載</slot>
      </span>
  </div>
</template>
<script>
export default {
  name: 'textWithBackground',
  props: {
    Mclass: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.textWithBackground{
  display: inline-block;
  background-color: palegoldenrod;
  border-radius: 5px;
  .textWithBackground_content{
    text-align: center;
  }
}
</style>
