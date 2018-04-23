<template>
  <div class="container">
    {{ product }}
  </div>
</template>

<script>
export default {
  async asyncData ({ app, store, params, error }) {
    const product = await store.dispatch('product/getProductByAttr', params.slug)
    return { product }
  }
}
</script>

<style lang="scss" scoped>

</style>
