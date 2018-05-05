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
            class="_h-128px _bgrp-nrp _bgs-cv _bgpst-ct"/>
          <div class="_pd-4px _tal-ct">
            <small>
              {{ x.name }}
            </small>
          </div>
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
