<template>
  <div 
    class="accordion">
    <!-- Title -->
    <div 
      :class="{'-is-showing': isShowing}"
      class="title _cs-pt _pdl-24px" 
      @click="isShowing = !isShowing">
      <slot name="title"/>
    </div>
    <!-- Content -->
    <slide-y-up-transition>
      <div 
        v-show="isShowing"
        class="content _mgt-24px">
        <slot name="content"/>
      </div>
    </slide-y-up-transition>
  </div>
</template>

<script>
export default {
  props: {
    forceShow: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isShowing: false
  }),
  created() {
    this.isShowing = this.forceShow
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  transition: 0.2s;
}
.title {
  position: relative;
  ::before {
    transition: 0.15s;
    content: '';
    transform: rotate(-135deg) translate(0, calc(-50% - 2px));
    transform-origin: top center;
    border: 2px solid rgba(57, 59, 70, 0.9);
    border-right-width: 0px;
    border-top-width: 0px;
    border-color: rgba(57, 59, 70, 0.9);
    height: 8px;
    width: 8px;
    position: absolute;
    left: 0px;
    top: 48%;
    will-change: transform;
  }
  &.-is-showing {
    ::before {
      transform: rotate(-45deg) translate(2px, -50%);
    }
  }
}
</style>
