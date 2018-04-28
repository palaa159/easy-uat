<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 _pdv-16px">
        <PageHeading 
          :text="$route.params.catSlug"
          class="_w-100pct"
        />
        <!-- <h4 class="_tal-ct">{{ $route.params.catSlug }}</h4> -->
      </div>
    </div>
    <div class="row">
      <div 
        v-for="(x, i) in products" 
        :key="i" 
        class="col-12 _pdh-0px">
        <!-- {{ x }} -->
        <ProductWithPurchase 
          :product-data="x"
          :product-id="x.id"
          :heading="x.name"
          :image="x.images[0].src"
          :description-list="x.description"
          :short-description="x.short_description"
          :price="parseFloat(x.price)"
          :stock-quantity="x.stock_quantity"
          :unit="x.attributes[0] && x.attributes[0].options[0] || ''"
        />
      </div>
    </div>
    <!-- Other products -->
    <OtherProducts 
      :items="cats"
    />
  </div>
</template>

<script>
import PageHeading from '~/components/text/PageHeading'
import ProductWithPurchase from '~/components/products/ProductWithPurchase'
import OtherProducts from '~/components/products/OtherProducts'
export default {
  async asyncData ({ app, store, params, redirect }) {
    const products = await store.dispatch('product/getProductsByCatSlug', params.catSlug)
    // if (!products) {
    //   redirect('/')
    // }
    return { products }
  },
  components: { 
    ProductWithPurchase,
    PageHeading,
    OtherProducts
  },
  data: () => ({
    cats: []
  }),
  head () {
    return {
      title: `${this.products[0].categories[0].name} ${this.$store.state.site.title}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.products[0].categories[0].name} ${this.$store.state.site.title}` },
        { hid: 'og:description', name: 'og:description', content: `${this.products[0].categories[0].name} ${this.$store.state.site.title}` }
      ]
    }
  },
  async created () {
    // Get all cats except itself
    let cats = await this.$store.dispatch('product/getCategories', {
      exclude: this.products && this.products[0].categories[0].id || 0
    })
    this.cats = cats.filter(cat => cat.slug !== 'uncategorized')
  }
}
</script>

<style lang="scss" scoped>
  
</style>
