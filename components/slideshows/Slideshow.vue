<template>
  <div v-if="slides.length">
    <no-ssr>
      <agile 
        :options="slideOptions">
        <div 
          v-for="(slide, i) in slides"
          :key="i" 
          :style="`background-image: url(${slide.image || ''})`"
          class="slide _dp-f _bgrp-nrp _bgs-cv _bgpst-ctr _bgcl-gray _alit-ct _jtfct-ct">
          <div>
            <h3 
              class="_cl-white _tal-ct _lh-100pct" 
              v-html="slide.header"/>
            <h4 
              class="_cl-white _tal-ct _lh-100pct" 
              v-html="slide.subheader"/>
              <!-- <p v-html="slide.description"/> -->
          </div>
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
      default: () => [1, 2]
    }
  },
  data: () => ({
    slideOptions: {}
  }),
  mounted() {
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
@import 'assets/styles/variables';
.slide {
  height: 480px;
  @include breakpoint(mobile) {
    height: 256px;
  }
}
</style>
