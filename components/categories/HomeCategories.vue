<template>
  <div class="container">
    <div class="row">
      <div 
        v-for="(x, i) in categories" 
        :key="i" 
        class="col-4 col-md _pd-4px">
        <nuxt-link :to="`/shop/${x.slug}`">
          <div 
            v-lazy:background-image="x.image && x.image.src || ''" 
            class="_h-128px _tal-ct _bgrp-nrp _bgs-ct _bgpst-ct _dp-f _alit-ct _jtfct-ct _cl-white _fw-700"/>
          <h6 class="_tal-ct _lh-100pct _pdt-16px">{{ x.name }}</h6>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/categories/Card'
export default {
  components: {
    Card
  },
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>
