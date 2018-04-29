<template>
  <div class="_w-100pct">
    <!-- Slide -->
    <div class="_w-100pct _bgcl-gray">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Agile -->
            <Slideshow
              :slides="topSlides"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- สินค้ามาใหม่ -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="_pdv-12px">สินค้ามาใหม่</h4>
          <div>
            <FeaturedProducts 
              :products="featuredProducts"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- สินค้าตามหมวดหมู่ -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4>ดูสินค้าตามหมวดหมู่</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Slideshow from '~/components/slideshows/Slideshow'
  import FeaturedProducts from '~/components/products/FeaturedProducts'
  export default {
    components: {
      Slideshow,
      FeaturedProducts
    },
    head () {
      const siteTitle = this.$store.state.site.title
      return { 
        title: `หน้าแรก ${siteTitle}`,
        meta: [
          { hid: 'og:title', property: 'og:title', content: `หน้าแรก` },
          { hid: 'og:description', name: 'og:description', content: `หน้าแรก` }
        ]
      }
    },
    data: () => ({
      topSlides: [{}, {}],
      featuredProducts: []
    }),
    async mounted () {
      // Call homepage slideshow
      const promises = [
        this.$store.dispatch('content/getSlideshow', {
          slug: 'homepage-banner'
        }),
        this.$store.dispatch('product/getFeaturedProducts')
      ]
      const [ topSlides, featuredProducts ] = await Promise.all(promises)
      this.topSlides = topSlides
      this.featuredProducts = featuredProducts
    }
  }
</script>
<style lang="scss" scoped>
  .hero-image {
    width: 100%;
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    &[lazy=loaded] {
      filter: drop-shadow(0mm 5mm 4mm rgba(0, 0, 0, .15));
    }
  }
  h1 {
    font-family: 'Kanit', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    line-height: 3.4rem;
    letter-spacing: 3px;
    color: #182F69;
  }
</style>
