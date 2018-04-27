<template>
  <div class="row">
    <div class="col-12">
      <h1 
        class="_lh-100pct _cl-light-purple _tal-ct _fs-4 _fw-600 _pdv-32px _w-100pct" 
        v-html="`สินค้าอื่นๆ ที่น่าสนใจ`" />
    </div>
    <div 
      v-for="(item, i) in items"
      :key="i" 
      class="col-12 col-md-3">
      <!-- ProductThumb -->
      <ProductThumb 
        :image="item.image.src"
        :text="item.name"
        :url="`/products/${item.slug}`"
      />
    </div>
  </div>
</template>

<script>
import ProductThumb from '~/components/products/ProductThumb'
export default {
  components: {
    ProductThumb
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
}
</script>

