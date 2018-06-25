<template>
  <div class="_w-100pct card">
    <div class="row no-gutters">
      <div class="col-12">
        <!-- Featured Image -->
        <div 
          v-lazy:background="data.acf.assets.featured_image" 
          class="_bgrp-nrp _bgs-cv image _bgpst-ct"/>
      </div>
      <div class="col-12 _cl-dark _pdh-12px _pdv-12px card-detail">
        <!-- Date -->
        <div 
          class="_fs-8 _mgbt-8px">
          {{ data.post_date | moment('DD MMM YYYY') }}
        </div>
        <!-- Title -->
        <h6 
          v-line-clamp:18="2" 
          class="_lh-125pct">
          {{ data.post_title }}
        </h6>
        <!-- Short Desc -->
        <!-- <p 
          v-line-clamp:18="2" 
          class="_fs-7 _lh-150pct" >{{ data.acf.short_description }}</p> -->
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
.card {
  box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.15);
}
.card-detail {
  height: 84px;
}
.image {
  height: 200px;
}
</style>
