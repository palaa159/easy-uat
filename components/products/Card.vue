<template>
  <div class="card _bgcl-white _ovf-hd _bdrd-2px">
    <!-- Badge -->
    <div 
      v-if="badge.acf && badge.acf.full_price" 
      class="badge _fw-600 _fs-7">
      Pre-order
    </div>
    <!-- Image -->
    <nuxt-link :to="`/store/product/${slug}`">
      <div 
        v-lazy:background-image="image" 
        class="image _bgs-cv _bgpst-ct _bgrp-nrp" />
    </nuxt-link>
    <!-- Detail -->
    <div class="_pdh-12px _pdv-8px">
      <div class="_h-48px">
        <nuxt-link 
          :to="`/store/product/${slug}`" 
        >
          <p 
            v-line-clamp:18="2" 
            class="_lh-150pct _fs-7 _cl-neutral-800">{{ title | titleLang }}</p>
        </nuxt-link>
      </div>
      <!-- <p v-if="salePrice !== '0'">
        <span class="currency">฿</span>
        <span>{{ salePrice }}</span>
      </p> -->
      <p class="_mgbt-4px _lh-100pct _fs-7 _fw-600">
        <span 
          v-if="badge.acf && badge.acf.full_price" 
        >
          {{ badge.acf.full_price | currency }}
        </span>
        <span 
          v-else-if="price"
        >{{ price | currency }}</span>
        <span v-else>Pre-Order</span>
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
    },
    badge: {
      type: Object,
      default: () => {}
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
  .badge {
    position: absolute;
    top: 12px;
    background: red;
    color: #fff;
    padding: 4px 8px;
  }
}
</style>

