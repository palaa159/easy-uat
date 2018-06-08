<template>
  <div 
    v-if="products" 
    class="container-fluid _pd-0px">
    <div class="row">
      <div 
        v-for="(p, i) in products.slice(0, limit)" 
        :key="i" 
        class="col-6 col-sm-4 col-md-2 _mgbt-24px">
        <Card
          :key="i"
          :title="p.name" 
          :image="p.image"
          :price="p.price_html"
          :slug="p.slug"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/products/Card'
export default {
  components: {
    Card
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    limit: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-width: 100%;
  min-height: 200px;
}
</style>
