<template>
  <div>
    <Header
      :light="true"
      :hero="true"
      :heroImage="`https://cms.makerstation.in.th/wp-content/uploads/2018/06/photo-1509221438419-e2b9e74e4d4b.jpeg`"
      :header="_header"
      :description="_description"
    />
    <!-- <div class="_bdtw-1px breadcrumb _bdcl-neutral-200">
      <Breadcrumbs />
    </div> -->
    <!-- Content -->
    <main class="min-height _dp-f _alit-ct">
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
  },
  computed: {
    _header () {
      return 'About us'
    },
    _description () {
      return 'พวกเราคือใคร?'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.min-height {
  min-height: calc(100vh - 400px);
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
