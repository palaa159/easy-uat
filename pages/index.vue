<template>
  <div class="container">
    <nuxt-link to="/kitchensink">
      kitchensink
    </nuxt-link>
    {{ $store.state }}
  </div>
</template>

<script>
  import Page from '~/components/layout/Page'
  // import WooCommerce from 'woocommerce'
  export default {
    head () {
      const siteTitle = this.$store.state.site.title
      return { 
        title: `Home ${siteTitle}`
      }
    },
    components: {
      Page
    },
    mounted () {
      // Get featured product
    }
  }
</script>