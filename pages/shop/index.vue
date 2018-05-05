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
    <!-- <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="_pdv-12px">สินค้ามาใหม่</h4>
          <div class="_pdh-12px">
            <FeaturedProducts 
              :products="featuredProducts"
            />
          </div>
        </div>
      </div>
    </div> -->
    <!-- สินค้าตามหมวดหมู่ -->
    <div class="container">
      <div class="row _mgbt-24px">
        <div class="col-12">
          <h4 class="_pdv-12px">ดูสินค้าตามหมวดหมู่</h4>
          <div>
            <HomeCategories 
              :categories="categories"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div class="container _mgt-32px">
      <!-- Each product cats -->
      <div 
        v-for="(cat, i) in categories" 
        :key="i" 
        class="row _mgv-16px">
        <div class="col-12">
          <ProductsInCategory 
            :cat-title="cat.name"
            :cat-slug="cat.slug"
            :cat-id="cat.id"
            :products="cat.products"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from '~/components/slideshows/Slideshow'
import FeaturedProducts from '~/components/products/FeaturedProducts'
import ProductsInCategory from '~/components/categories/ProductsInCategory'
import HomeCategories from '~/components/categories/HomeCategories'
export default {
  layout: 'shop',
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `Shop ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `Shop` },
        { hid: 'og:description', name: 'og:description', content: `Shop` }
      ]
    }
  },
  components: {
    Slideshow,
    FeaturedProducts,
    ProductsInCategory,
    HomeCategories
  },
  data: () => ({
    topSlides: [],
    categories: [],
    featuredProducts: []
  }),
  async asyncData({ store }) {
    const categories = await store.dispatch('product/getShopCategories')
    // console.log(categories)
    return {
      categories
    }
  },
  // created() {
  //   this.$store
  //     .dispatch('product/getFeaturedProducts')
  //     .then(featuredProducts => (this.featuredProducts = featuredProducts))
  // },
  mounted() {
    this.$store
      .dispatch('content/getSlideshow', {
        slug: 'homepage-banner'
      })
      .then(topSlides => (this.topSlides = topSlides))
  }
}
</script>

<style lang="scss" scoped>

</style>
