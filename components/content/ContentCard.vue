<template>
  <div class="_w-100pct">
    <div class="row no-gutters">
      <div class="col-12">
        <!-- Featured Image -->
        <div 
          v-lazy:background="data.acf.assets.featured_image" 
          class="_bgrp-nrp _bgs-cv image _bgpst-ct"/>
      </div>
      <div class="col-12 _bgcl-dark _cl-white _pdh-12px _pdv-12px">
        <!-- Date -->
        <div class="_fs-8 _mgbt-8px">
          {{ data.post_date | moment('DD MMM YYYY') }}
        </div>
        <!-- Title -->
        <h6 class="_lh-100pct _mgbt-8px">
          {{ data.post_title }}
        </h6>
        <!-- Short Desc -->
        <p class="_fs-7 _lh-125pct">{{ data.acf.short_description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 200px;
}
</style>
