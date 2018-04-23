<template>
  <div class="container">
    <div 
      v-for="(x, i) in cats" 
      :key="i">
      <nuxt-link :to="`/products/${x.slug}`">
        {{ decodeURI(x.slug) }}
      </nuxt-link>
    </div>
    {{ cats }}
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    let cats = await store.dispatch('product/getCategories')
    cats = cats.filter(cat => cat.slug !== 'uncategorized')
    return {
      cats
    }
  }
}
</script>
