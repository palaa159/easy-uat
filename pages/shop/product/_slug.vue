<template>
  <div class="container-fluid">
    x
  </div>
</template>

<script>
import ProductThumb from '~/components/products/ProductThumb'
import PageHeading from '~/components/text/PageHeading'
export default {
  async asyncData ({ store, error }) {
    let cats = await store.dispatch('product/getCategories', {})
    cats = cats.filter(cat => cat.slug !== 'uncategorized')
    return {
      cats
    }
  },
  components: {
      ProductThumb,
      PageHeading
  },
  head () {
    const siteTitle = this.$store.state.site.title
    return { 
      title: `สินค้า ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `สินค้า` },
        { hid: 'og:description', name: 'og:description', content: `สินค้า` }
      ]
    }
  }
}
</script>
