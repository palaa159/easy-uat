<template>
  <div class="_w-100pct">
    <!-- Products -->
    <div 
      v-if="res"
      class="container _mgv-32px">
      <!-- Products -->
      <div class="row">
        <div class="col-12">
          <nuxt-link 
            to="/store" 
            class="bio-link -fancy">
            <h6 class="_mgbt-16px">กลับไปที่ MakerStore</h6>
          </nuxt-link>
          <h4 class="_mgbt-16px">สินค้าทั้งหมด</h4>
        </div>
      </div>
      <div class="row">
        <div 
          v-for="(p, i) in res" 
          :key="i" 
          class="col-6 col-md-3 col-lg-2 _mgbt-24px">
          <Card
            :key="i"
            :title="p.name" 
            :image="p.image"
            :price="p.price || p.price_html"
            :slug="p.slug"
            :badge="p"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsInCategory from '~/components/categories/ProductsInCategory'
import Card from '~/components/products/Card'
import groupBy from 'lodash/groupBy'
export default {
  components: {
    ProductsInCategory,
    Card
  },
  async asyncData({ store, params }) {
    const res = await store.dispatch(
      'product/getProductsByCatSlug',
      params.catSlug
    )
    return {
      res
    }
  },
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `${this._parentCatName.name} – ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this._parentCatName.name },
        { hid: 'og:description', name: 'og:description', content: siteTitle }
      ]
    }
  },
  layout: 'store',
  computed: {
    _parentCatName() {
      return this.$store.state.product.categories.find(
        (x) => x.slug === this.$route.params.catSlug
      )
    },
    _subCategories() {
      // Group by Subcats
      return this._parentCatName.subcategories
    }
  }
}
</script>
