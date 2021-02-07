<template>
  <div class="boostrapModal" v-if="isShow">
    <div class="modal-dialog modal-dialog-centered"  :class="Mclass[0]">
      <div class="modal-content">
        <div class="modal-header" :class="Mclass[1]">
            <slot name="header"></slot>
        </div>
        <div class="modal-body" :class="Mclass[2]">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer" :class="Mclass[3]">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div class="modal-background" :class="bgStyle">
    </div>
  </div>
</template>
<script>
export default {
  name: 'boostrapModal',
  props: {
    Mclass: {
      type: Array,
      required: true
    },
    bgStyle: {
      type: String,
      required: true
    },
    isShow: {
      type: Boolean,
      default: false
    },
    val: {
      type: Number,
      default: 5
    }
  }
}
</script>
<style lang="scss" scoped>
  .boostrapModal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
  }
  .modal-background{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top:0;
    background-color: gray;
    opacity: 0.5;
  }
  .modal-dialog__layout{

    z-index: 2;
  }
  .bg-style{
    z-index:1;
  }
</style>
