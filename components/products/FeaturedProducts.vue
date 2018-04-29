<template>
  <div class="_ovfx-at wrapper _dp-f _pdbt-16px">
    <Card
      v-for="(x, i) in products" 
      :key="i"
      :title="x.name" 
      :image="x.images[0].src"
      :regular-price="x.regular_price"
    />
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
      default: () => ([])
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
