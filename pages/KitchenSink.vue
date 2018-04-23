<template>
  <Page>
    <!-- <h1>Component Kitchensink</h1> -->
    <div style="width: 600px;">
      <HomeShowcase
        :left-image="false"
      />
      <PageHeading />
      <ProductThumb />
      <ProductWithPurchase />
    </div>
  </Page>
</template>

<script>
  import HomeShowcase from '~/components/products/HomeShowcase'
  import ProductThumb from '~/components/products/ProductThumb'
  import ProductWithPurchase from '~/components/products/ProductWithPurchase'
  import PageHeading from '~/components/text/PageHeading'
  import Page from '~/components/layout/Page'
  export default {
    components: {
      Page,
      HomeShowcase,
      PageHeading,
      ProductThumb,
      ProductWithPurchase
    }
  }
</script>