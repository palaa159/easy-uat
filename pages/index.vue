<template>
  <div class="container">
    <nuxt-link to="/kitchensink">
      kitchensink
    </nuxt-link>
    <div class="row _jtfct-ct">
      <div class="col-12 col-lg-10 _mgv-16px" v-for="(item, i) in mockProducts" :key="i">
        <HomeShowcase 
          :leftImage="(i + 1) % 2 === 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import HomeShowcase from '~/components/products/HomeShowcase'
  // import WooCommerce from 'woocommerce'
  export default {
    data: () => ({
      mockProducts: [1,2,3,4]
    }),
    head () {
      const siteTitle = this.$store.state.site.title
      return { 
        title: `Home ${siteTitle}`
      }
    },
    components: {
      HomeShowcase
    }
  }
</script>