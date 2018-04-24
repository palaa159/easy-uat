<template>
  <div class="container">
    <!-- <div 
      v-for="(x, i) in cats" 
      :key="i">
      <nuxt-link :to="`/products/${x.slug}`">
        {{ decodeURI(x.slug) }}
      </nuxt-link>
    </div> -->
    <!-- {{ cats }} -->
    <h1>สินค้าแนะนำสำหรับผู้ที่มีเครื่องอยู่แล้ว</h1>
    <div class="row _dp-f _jtfct-ct">
      <div 
        v-for="(item, i) in cats" 
        :key="i" 
        class="col-4 _mgv-16px">
        <ProductThumb 
          :image="item.image.src"
          :text="item.name"
          :url="`/products/${item.slug}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductThumb from '~/components/products/ProductThumb'
export default {
  async asyncData ({ store }) {
    let cats = await store.dispatch('product/getCategories')
    cats = cats.filter(cat => cat.slug !== 'uncategorized')
    return {
      cats
    }
  },
  components: {
      ProductThumb
  },
}
</script>
