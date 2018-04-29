<template>
  <div>
    <no-ssr>
      <agile 
        :options="slideOptions">
        <div 
          v-for="(slide, i) in slides"
          :key="i" 
          :style="`background-image: url(${slide.image || ''})`"
          class="slide _bgrp-nrp _bgs-cv _bgpst-ct _bgcl-gray">
          <h3 v-html="slide.header"/>
          <h5 v-html="slide.subheader"/>
          <p v-html="slide.description"/>
        </div>
      </agile>
    </no-ssr>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => ([1, 2])
    }
  },
  data: () => ({
    slideOptions: {}
  }),
  mounted () {
    if (process.browser) {
      this.slideOptions = {
        // fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnDotsHover: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .slide {
    height: 350px;
  }
</style>
