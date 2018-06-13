<template>
  <div>
    <Header/>
    <div class="_bdtw-1px breadcrumb _bdcl-neutral-200">
      <Breadcrumbs />
    </div>
    <!-- Content -->
    <main 
      class="min-height-100vh _dp-f _alit-ct _pdbt-128px">
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import Breadcrumbs from '~/components/navigations/Breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  background: rgba(0, 0, 0, 0.02);
}
</style>
