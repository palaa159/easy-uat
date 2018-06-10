<template>
  <div class="container">
    <div class="row">
      <div 
        v-for="(x, i) in categories" 
        :key="i" 
        class="col-4 col-md _pd-4px">
        <nuxt-link 
          :to="`/store/${x.slug}`" 
          class="bio-link">
          <div 
            v-lazy:background-image="x.image || ''" 
            class="_h-64px _tal-ct _bgrp-nrp _bgs-ct _bgpst-ct _dp-f _alit-ct _jtfct-ct _cl-white _fw-700"/>
          <h6 class="_tal-ct _lh-100pct _pdt-16px _cl-neutral-700">{{ x.name }}</h6>
        </nuxt-link>
      </div>
    </div>
    <!-- {{ categories }} -->
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>
