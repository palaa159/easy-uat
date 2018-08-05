<template>
  <div class="_w-100pct">
    <!-- สินค้าตามหมวดหมู่ -->
    <div class="container">
      <div class="row _mgv-24px _jtfct-ct">
        <div class="col-12 col-md-10">
          <div>
            <HomeCategories 
              :categories="$store.state.product.categories"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- สินค้าแนะนำ -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="_pdv-12px">สินค้าแนะนำ</h4>
          <div>
            <ProductCardsColumn 
              :products="featuredProducts"
              :limit="12"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Brand Banners -->
    <div class="container">
      <div class="row">
        <div v-for="(item, i) in brands" :key="i" class="col-12 col-md-6">
          <nuxt-link :to="`/brand/${item.slug}`">
            <div v-lazy:background-image="item.acf.store_banner.url" class="_bgs-cv store-banner-image _mgbt-24px" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div class="container _mgt-32px">
      <!-- Each product cats -->
      <div 
        v-scroll-reveal="{delay: i * 200}" 
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
import ProductCardsColumn from '~/components/products/ProductCardsColumn'
import ProductsInCategory from '~/components/categories/ProductsInCategory'
import HomeCategories from '~/components/categories/HomeCategories'
export default {
  layout: 'shop',
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `MakerStore® – ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `MakerStore®` },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${siteTitle}`
        }
      ]
    }
  },
  components: {
    Slideshow,
    ProductCardsColumn,
    ProductsInCategory,
    HomeCategories
  },
  data: () => ({
    topSlides: [],
    categories: [],
    featuredProducts: [],
    searchKeyword: ''
  }),
  layout: 'store',
  async asyncData({ store }) {
    const promises = [
      store.dispatch('product/getShopCategories'),
      store.dispatch('page/getPage', { parent: 1120 }),
      store.dispatch('product/getFeaturedProducts'),
      store.dispatch('content/getSlideshow', {
        slug: 'shop-banner'
      })
    ]
    const [categories, brands, featuredProducts, topSlides] = await Promise.all(
      promises
    )
    return {
      categories,
      brands,
      featuredProducts,
      topSlides
    }
  }
}
</script>

<style lang="scss" scoped>
.store-banner-image {
  padding-top: 43.75%;
  background-position: center center;
  transition: 0.25s;
  &:hover {
    transform: translateY(-4px);
  }
}
</style>
