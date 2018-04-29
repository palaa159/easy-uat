<template>
  <div class="card _dp-ilb _mgr-24px _bgcl-gray _ovf-hd _bdrd-2px">
    <!-- Image -->
    <nuxt-link to="/">
      <div 
        v-lazy:background-image="image" 
        class="image _bgs-cv _bgpst-ct _bgrp-nrp" />
    </nuxt-link>
    <!-- Detail -->
    <div class="_pdh-12px _pdv-8px">
      <p 
        class="_h-48px _lh-125pct" 
        v-html="title"/>
      <p>
        <span class="currency">฿</span>
        <span>{{ salePrice || regularPrice }}</span>
      </p>
      <p v-if="salePrice">
        <span class="currency">฿</span>
        <span>{{ regularPrice }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'x'
    },
    image: {
      type: String,
      default: ''
    },
    regularPrice: {
      type: Number,
      default: 0
    },
    salePrice: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    min-width: 200px;
    &:hover {
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .image {
      height: 200px;
    }
  }
</style>

