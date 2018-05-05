<template>
  <div>
    <div class="_dp-f _alit-ct">
      <h4 
        class="_lh-100pct" 
        v-html="catTitle"/>
      <nuxt-link 
        :to="`/shop/${catSlug}`" 
        class="_mgl-8px">
        ดูทั้งหมด
      </nuxt-link>
    </div>
    <!-- Products -->
    <div 
      v-if="products" 
      class="container-fluid _mgv-32px">
      <div class="row">
        <div 
          v-for="(p, i) in products" 
          :key="i" 
          class="col-6 col-md-3 col-lg-2 _mgbt-24px">
          <Card
            :key="i"
            :title="p.name" 
            :image="p.images[0].src"
            :regular-price="p.regular_price"
            :slug="p.slug"
          />
        </div>
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
    catTitle: {
      default: 'title',
      type: String
    },
    catId: {
      default: 0,
      type: Number
    },
    catSlug: {
      default: 'slug',
      type: String
    },
    products: {
      default: () => [],
      type: Array
    }
  }
}
</script>
