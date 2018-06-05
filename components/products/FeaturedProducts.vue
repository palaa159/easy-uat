<template>
  <!-- <div class="_ovfx-at wrapper _dp-f _pdbt-16px">
    <Card
      v-for="(x, i) in products" 
      :key="i"
      :title="x.name"
      :image="x.image || x.images[0].src" 
      :price="x.price_html"
      :slug="x.slug"
      class="_dp-ilb _mgr-24px"
    />
  </div> -->
  <div 
    v-if="products" 
    class="container-fluid _pd-0px">
    <div class="row">
      <div 
        v-for="(p, i) in products" 
        :key="i" 
        class="col-6 col-md-3 col-lg-2 _mgbt-24px">
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
