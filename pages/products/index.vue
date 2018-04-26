<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeading 
        text="สินค้าแนะนำสำหรับผู้ที่มีเครื่องอยู่แล้ว"
        class="_w-100pct"
      />
      <div class="_bgcl-aqua _pdbt-48px col-12">
        <div class="container">
          <!-- Top row -->
          <div class="row _dp-f _jtfct-ct _bgcl-aqua">
            <div 
              v-for="(item, i) in cats.slice(0, 3)" 
              :key="i" 
              class="col-12 col-md-4"
            >
              <ProductThumb 
                :image="item.image.src"
                :text="item.name"
                :url="`/products/${item.slug}`"
              />
            </div>
          </div>
        </div>
      </div>  
      <!-- x -->
      <div class="_w-100pct">
        <div class="container">
          <!-- Bottom row -->
          <div class="row _dp-f _jtfct-ct">
            <div 
              v-for="(item, i) in cats.slice(3, 5)" 
              :key="i" 
              class="col-12 col-md-4"
            >
              <ProductThumb 
                :image="item.image.src"
                :text="item.name"
                :url="`/products/${item.slug}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductThumb from '~/components/products/ProductThumb'
import PageHeading from '~/components/text/PageHeading'
export default {
  async asyncData ({ store }) {
    let cats = await store.dispatch('product/getCategories')
    cats = cats.filter(cat => cat.slug !== 'uncategorized')
    return {
      cats
    }
  },
  components: {
      ProductThumb,
      PageHeading
  },
}
</script>
