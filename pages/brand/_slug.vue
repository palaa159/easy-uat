<template>
  <no-ssr>
    <div class="_w-100pct -wp">
      <!-- <div 
        v-lazy:background-image="page.acf.cover_image.url" 
        class="image _w-100pct _bgs-cv _bgpst-ct _bgcl-black"/> -->
      <div 
        class="_w-100pct _mgv-32px" 
        v-html="page.content.rendered"/>
      <!-- Products -->
      <div class="container">
        <div 
          v-if="products.length" 
          id="similar-products" 
          class="_mgv-32px">
          <h3 class="_cl-neutral-500">สินค้าทั้งหมด</h3>
          <div class="row">
            <div 
              v-for="(p, i) in products" 
              :key="i" 
              class="col-6 col-md-2 _mgbt-24px">
              <Card
                :key="i"
                :title="p.name" 
                :image="p.image || p.image_id || (p.images && p.images[0])"
                :price="p.price || p.price_html"
                :slug="p.slug"
                :badge="p"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<style lang="scss" scoped>
.image {
  padding-top: 35%;
}
</style>


<script>
import pkg from '~/package.json'
import Card from '~/components/products/Card'
export default {
  components: {
    Card
  },
  data: () => ({
    products: []
  }),
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `${this.page.title.rendered} – ${siteTitle}`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.page.title.rendered} ${siteTitle}`
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `${pkg.url}` + this.$route.fullPath
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${siteTitle}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${(this.page.acf.store_banner.url) || ''}`
        }
      ]
    }
  },
  async asyncData({ store, params, redirect }) {
    const slug = params.slug
    const page = await store.dispatch('page/getPage', {
      slug
    })
    // console.log(page)
    if (!page.length) {
      return redirect('/')
    }
    return {
      page: page[0]
    }
  },
  async created () {
    const products = await this.$store.dispatch('product/getProductsByAttr', {
      brandId: this.page.acf.brand.term_id
    })
    this.products = products
  }
}
</script>
