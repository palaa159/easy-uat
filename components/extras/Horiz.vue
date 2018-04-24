<template>
  <div 
    :class="_class" 
    class="_pst-rlt _mgv-24px">
    <hr>
    <div class="textContainer _tal-ct _w-100pct">
      <h6 class="_bgcl-white _dp-ilb _cl-neutral-600 _pdh-12px _mgt-8px _lh-100pct">
        {{ text }}
      </h6>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      _class: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .textContainer {
    position: absolute;
    top: -18px;
  }
  hr {
    border-width: 0.5px;
    border-style: inset;
    border-color: rgba(0, 0, 0, 0.25);
  }
</style>
