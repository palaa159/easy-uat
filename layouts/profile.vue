<template>
  <div>
    <Header/>
    <!-- Content -->
    <main class="min-height-100vh _dp-f _alit-fst">
      <div class="container _mgv-32px">
        <!-- <div class="row">
          <div class="col">
            <h4 class="_tal-ct _mgv-16px">ข้อมูลบัญชีของคุณ</h4>
          </div>
        </div> -->
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="_bgcl-white _pd-16px">
              <!-- User profile -->
              <User />
              <!--  Menu -->
              <Menu />
            </div>
          </div>
          <div class="col-12 col-md-8 _mgt-16px _mgt-0px-sm">
            <div class="_bgcl-white _pd-16px-sm">
              <nuxt/>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Curtain -->
    <fade-transition>
      <div 
        v-if="$store.state.purchase.isCartShowing"
        class="curtain _pst-asl _t-0px _l-0px _w-100pct _h-100pct _zid-1"
        @click="$store.commit('purchase/SET_CART_SHOW', false)"
      />
    </fade-transition>
    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/layout/Header'
  import Footer from '~/components/layout/Footer'
  import User from '~/components/profile/User'
  import Menu from '~/components/profile/Menu'
  export default {
    components: {
      Header,
      Footer,
      User,
      Menu
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/styles/variables';
  .min-height-100vh {
    min-height: calc(100vh - 100px);
    background: rgba(0, 0, 0, 0.02);
  }
  .curtain {
    @include breakpoint(mobile) {
      background: #fff;
    }
    background: rgba(0, 0, 0, 0.75);
  }
</style>
