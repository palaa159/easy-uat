<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 _pdv-16px">
        <h4 class="_tal-ct">{{ $route.params.catSlug }}</h4>
      </div>
    </div>
    <div class="row">
      <div 
        v-for="(x, i) in products" 
        :key="i" 
        class="col-12 _pdh-0px">
        <ProductWithPurchase 
          :heading="x.name"
          :image="x.images[0].src"
          :description-list="x.description"
          :short-description="x.short_description"
          :price="parseFloat(x.price)"
          :stock-quantity="x.stock_quantity"
          :unit="x.attributes[0].options[0]"
        />
      </div>
    </div>
    <div 
      v-for="(x, i) in products" 
      :key="i">
      {{ x }}
    </div>
    {{ products }}
  </div>
</template>

<script>
import ProductWithPurchase from '~/components/products/ProductWithPurchase'
export default {
  async asyncData ({ app, store, params, error }) {
    const products = await store.dispatch('product/getProductsByCatSlug', params.catSlug)
    return { products }
  },
  components: { 
    ProductWithPurchase
  }
}
</script>

<style lang="scss" scoped>
  
</style>
