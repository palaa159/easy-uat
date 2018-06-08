<template>
  <div class="_w-100pct">
    <!-- Slide -->
    <div class="_w-100pct _bgcl-gray _h-256px _h-512px-md">
      <Slideshow
        :slides="topSlides"
      />
    </div>
    <!-- Search -->
    <div class="container">
      <div class="row _jtfct-ct">
        <div class="col-12 col-md-10 _mgt-48px _mgbt-32px">
          <form 
            class="_dp-f _w-100pct _alit-ct" 
            @submit.stop.prevent="submit">
            <!-- <h5 class="_f-1">ค้นหา: </h5> -->
            <div class="bio-input _f-4 _f-6-md">
              <input 
                v-model="searchKeyword"
                class="_fs-4 _h-48px" 
                type="text" 
                placeholder="ไซโคลน, เลื่อย, ปากกา">
            </div>
            <button 
              type="submit" 
              class="_f-1 _h-48px bio-button -dark">ค้นหา</button>
          </form>
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
    <!-- สินค้ามาใหม่ -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="_pdv-12px">สินค้ามาใหม่</h4>
          <div>
            <ProductCardsColumn 
              :products="featuredProducts"
              :limit="12"
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
import ProductCardsColumn from '~/components/products/ProductCardsColumn'
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
  async asyncData({ store }) {
    const promises = [
      store.dispatch('product/getShopCategories'),
      store.dispatch('product/getFeaturedProducts'),
      store.dispatch('content/getSlideshow', {
        slug: 'shop-banner'
      })
    ]
    const [categories, featuredProducts, topSlides] = await Promise.all(
      promises
    )
    return {
      categories,
      featuredProducts,
      topSlides
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
