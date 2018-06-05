<template>
  <div class="_w-100pct">
    <div class="_w-100pct">
      <h3 
        class="_tal-ct _mgv-24px" 
        v-html="res.category.name"/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div 
            v-for="(cat, i) in res.subcategories" 
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
    </div>
    <!-- Products -->
    <div 
      v-if="res.products"
      class="container _mgv-32px">
      <!-- Products -->
      <div class="row">
        <div class="col-12">
          <h4 class="_mgbt-16px">สินค้าทั้งหมด</h4>
        </div>
      </div>
      <div class="row">
        <div 
          v-for="(p, i) in res.products" 
          :key="i" 
          class="col-6 col-md-3 col-lg-2 _mgbt-24px">
          <Card
            :key="i"
            :title="p.name" 
            :image="p.images[0].src"
            :price="p.price_html"
            :slug="p.slug"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsInCategory from '~/components/categories/ProductsInCategory'
import Card from '~/components/products/Card'
export default {
  components: {
    ProductsInCategory,
    Card
  },
  async asyncData({ store, params }) {
    const res = await store.dispatch(
      'category/getProductsAndSubcats',
      params.catSlug
    )
    return {
      res
    }
  }
}
</script>
