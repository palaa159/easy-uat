<template>
  <div 
    class="_dp-f _fdrt-cl _alit-ct item">
    <div 
      :class="{'_bgcl-primary': isActive}" 
      class="step-badge _dp-f _alit-ct _jtfct-ct _cl-white _mgbt-8px _bdrd-50pct _w-24px _h-24px _fs-7">{{ number }}</div>
    <small 
      :class="{'_cl-neutral-800': isActive}" 
      class="_tal-ct" 
      v-html="title"/>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  z-index: 2;
  .step-badge {
    background: silver;
  }
  small {
    color: silver;
  }
  &.active {
    .step-badge {
      background: #000;
    }
    small {
      color: #000;
    }
  }
}
</style>
