<template>
  <div v-if="slides.length">
    <no-ssr>
      <agile 
        :options="slideOptions">
        <div 
          v-for="(slide, i) in slides"
          :key="i" >
          <div class="container-fluid">
            <div class="row _alit-ct">
              <div class="col-12 col-md-7">
                <div 
                  v-if="slide.acf.assets.youtube_full.length > 40"
                  class="_pdv-32px embed-responsive embed-responsive-21by9 _mgv-24px">
                  <iframe 
                    :src="`${slide.acf.assets.youtube_full}?rel=0`" 
                    class="embed-responsive-item" 
                    allowfullscreen/>
                </div>
                <div 
                  v-lazy:background="slide.acf.assets.featured_image"
                  v-else
                  class="_h-256px _bgrp-nrp _bgs-ct _bgpst-ct _mgv-24px"/>
              </div>
              <div class="col-12 col-md-5">
                <nuxt-link 
                  :to="`/blog/${slide.post_name}`" 
                  class="bio-link -fancy">
                  <h4 
                    class="_lh-125pct" 
                    v-html="slide.post_title"/>
                </nuxt-link>
                <p 
                  class="_lh-150pct" 
                  v-html="slide.acf.short_description"/>
              </div>
            </div>
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
      default: () => []
    }
  },
  data: () => ({
    slideOptions: {}
  }),
  mounted() {
    if (process.browser) {
      this.slideOptions = {
        infinite: false,
        arrows: false,
        autoplay: false,
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
