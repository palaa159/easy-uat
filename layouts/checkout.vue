<template>
  <div>
    <Header/>
    <!-- Content -->
    <main 
      :class="{'_mgt-48px': $store.state.menu.isUserSticky}"
      class="min-height-100vh _dp-f _alit-fst _jtfct-ct">
      <!-- Secured Checkout -->
      <!-- Checkout Steps -->
      <div 
        class="_w-100pct"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 _mgt-16px _tal-ct">
              <div class="_fs-5 _mgv-12px">🔒 Secured Checkout</div>
            </div>
          </div>
          <div class="row _pst-rlt _zid-0">
            <!-- H-Line -->
            <div class="_w-100pct _pst-asl h-line-container">
              <div 
                :style="`width: 0%`" 
                class="h-line" 
              />
            </div>
            <div 
              class="col-12 _mgt-24px _mgbt-32px _dp-f _alit-fst _jtfct-ct" 
            >
              <!-- Steps -->
              <div 
                v-for="(x, i) in steps" 
                :key="i" 
                class="_f-1 _dp-f _fdrt-cl _alit-ct">
                <PaymentStep
                  :number="i + 1"
                  :title="x.title"
                  :is-active="i + 1 === $store.state.purchase.checkoutStep"
                />
              </div>
            </div>
          </div>
        </div>
        <nuxt/>
      </div>
    </main>
    <!-- Curtain -->
    <fade-transition>
      <div 
        v-if="$store.state.purchase.isPurchasing" 
        class="curtain-purchase _pst-f _dp-f _alit-ct _jtfct-ct _tal-ct _t-0px _l-0px _w-100pct _h-100vh _zid-1 _fw-700">
        <p>
          Processing your order.
          <br> Do not close this page.
        </p>
      </div>
    </fade-transition>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import User from '~/components/profile/User'
import Menu from '~/components/profile/Menu'
import PaymentStep from '~/components/purchase/PaymentStep'
export default {
  components: {
    Header,
    Footer,
    User,
    Menu,
    PaymentStep
  },
  head: {
    script: [{ src: 'https://cdn.omise.co/omise.js.gz' }]
  },
  data: () => ({
    steps: [
      {
        title: `ตรวจรายการสินค้า<br>และการจัดส่ง`,
        icon: ''
      },
      {
        title: `เลือกช่องทาง<br>ชำระเงิน`,
        icon: ''
      },
      {
        title: `รับรหัสยืนยัน<br>และเสร็จสิ้น`,
        icon: ''
      }
    ]
  }),
  computed: {
    progressPercent() {
      return (this.$route.fullPath.split('/').length - 1) / 3 * 100 - 16
    }
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
.h-line-container {
  top: 35px;
}
.h-line {
  // position: relative;
  z-index: 1;
  width: 0%;
  height: 3px;
  background: rgba(0, 0, 0, 0.9);
  margin: 0px;
  border-radius: 2px;
  transition: 0.25s;
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    width: 100%;
    height: 3px;
    background: rgba(0, 0, 0, 0.1);
    margin: 0px;
    border-radius: 2px;
  }
}
.curtain-purchase {
  // position: relative;
  content: '';
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: calc(50% - 15px);
    display: inline-block;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #7983ff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: donut-spin 0.3s linear infinite;
    z-index: 10;
  }
}
</style>
