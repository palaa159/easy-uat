<template>
  <div class="card _bgcl-gray _ovf-hd _bdrd-2px">
    <!-- Image -->
    <nuxt-link :to="`/shop/product/${slug}`">
      <div 
        v-lazy:background-image="image" 
        class="image _bgs-cv _bgpst-ct _bgrp-nrp" />
    </nuxt-link>
    <!-- Detail -->
    <div class="_pdh-12px _pdv-8px">
      <div 
        class="_ovfy-hd" 
        style="height: 40px;">
        <nuxt-link 
          :to="`/shop/product/${slug}`" 
          class="_lh-125pct" 
          v-html="title"/>
      </div>
      <!-- <p v-if="salePrice !== '0'">
        <span class="currency">฿</span>
        <span>{{ salePrice }}</span>
      </p> -->
      <p class="_mgbt-4px _mgt-8px _lh-100pct">
        <span 
          class="_lh-100pct" 
          v-html="price"/>
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
    slug: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    regularPrice: {
      type: String,
      default: '0'
    },
    salePrice: {
      type: String,
      default: '0'
    },
    price: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-width: 140px;
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .image {
    height: 160px;
  }
}
</style>

