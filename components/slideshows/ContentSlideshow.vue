<template>
  <div v-if="false">
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
                  class="_pdv-32px embed-responsive embed-responsive-21by9 _mgv-48px">
                  <iframe 
                    :src="`${slide.acf.assets.youtube_full}?rel=0`" 
                    class="embed-responsive-item" 
                    allowfullscreen/>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <nuxt-link 
                  :to="`/content/${slide.post_name}`" 
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
        // fade: true,
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
