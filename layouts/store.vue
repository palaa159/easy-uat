<template>
  <div>
    <Header
      :light="true"
      :hero="true"
    />
    <!-- <div class="_bdtw-1px breadcrumb _bdcl-neutral-200">
      <Breadcrumbs />
    </div> -->
    <!-- Content -->
    <main class="min-height-100vh _dp-f _alit-ct">
      <nuxt/>
    </main>
    <!-- Curtain -->
    <fade-transition>
      <div 
        v-if="$store.state.purchase.isCartShowing"
        class="curtain _pst-f _t-0px _l-0px _w-100pct _h-100pct _zid-1"
        @click="$store.commit('purchase/SET_CART_SHOW', false)"
      />
    </fade-transition>
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
@import 'assets/styles/variables';
.min-height-100vh {
  min-height: calc(100vh - 100px);
  background: rgba(0, 0, 0, 0.02);
  padding-bottom: 100px;
}
.breadcrumb {
  background: rgba(0, 0, 0, 0.02);
}
.curtain {
  @include breakpoint(mobile) {
    background: #fff;
  }
  background: rgba(0, 0, 0, 0.75);
}
</style>
