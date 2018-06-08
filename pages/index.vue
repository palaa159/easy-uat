<template>
  <div class="_w-100pct">
    <!-- Slide -->
    <div class="_w-100pct _bgcl-gray _h-256px _h-512px-md">
      <Slideshow
        :slides="topSlides"
      />
    </div>
    <!-- สินค้ามาใหม่ -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="_pdv-12px">สินค้ามาใหม่</h4>
          <div>
            <ProductCardsColumn 
              :products="featuredProducts"
              :limit="8"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- สินค้าตามหมวดหมู่ -->
    <div class="container">
      <div class="row _mgbt-24px">
        <div class="col-12">
          <h4 class="_pdv-12px">ดูสินค้าตามหมวดหมู่</h4>
          <div>
            <HomeCategories 
              :categories="$store.state.product.categories"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="_w-100pct _bgcl-gray">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="_pdt-12px">คอนเท๊นต์</h4>
            <!-- Agile -->
            <ContentSlideshow
              :slides="contentSlides"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Makerspace Workshop -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="_pdv-12px">Makerspace Workshop</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rem quia. Iure quod nobis voluptate eveniet minima animi tempora sunt perspiciatis aliquam ut sit, consequatur eligendi soluta, ex enim illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores blanditiis omnis, sed, error unde dolores, repudiandae architecto doloribus vitae commodi aut quos? Minus, iure? Eaque totam eligendi deserunt natus nostrum.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from '~/components/slideshows/Slideshow'
import ContentSlideshow from '~/components/slideshows/ContentSlideshow'
import ProductCardsColumn from '~/components/products/ProductCardsColumn'
import HomeCategories from '~/components/categories/HomeCategories'
export default {
  components: {
    Slideshow,
    ProductCardsColumn,
    HomeCategories,
    ContentSlideshow
  },
  head() {
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
    topSlides: [],
    featuredProducts: [],
    categories: [],
    contentSlides: []
  }),
  async asyncData({ store }) {
    const promises = [
      store.dispatch('content/getSlideshow', {
        slug: 'homepage-banner'
      }),
      store.dispatch('product/getFeaturedProducts'),
      store.dispatch('content/getContent', { featured: true })
    ]
    const [topSlides, featuredProducts, contentSlides] = await Promise.all(
      promises
    )
    return {
      topSlides,
      featuredProducts,
      contentSlides
    }
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
  &[lazy='loaded'] {
    filter: drop-shadow(0mm 5mm 4mm rgba(0, 0, 0, 0.15));
  }
}
h1 {
  font-family: 'Kanit', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.4rem;
  letter-spacing: 3px;
  color: #182f69;
}
</style>
