<template>
  <div class="container">
    <!-- Back -->
    <div class="row">
      <div class="col-12 _mgbt-16px">
        <nuxt-link 
          to="/store/checkout" 
          class="bio-link -fancy">
          <fa-icon icon="long-arrow-alt-left"/>
          กลับไปยังหน้าก่อน
        </nuxt-link>
      </div>
    </div>
    <!-- Payment Methods -->
    <div class="row">
      <div class="col-12 col-md-8">
        <!-- New UI -->
        <div class="_pd-16px _bgcl-white">
          <h5 class="_mgh-12px _mgbt-16px">กรุณาเลือกช่องทางการชำระเงิน</h5>
          <div
            v-for="(x, i) in methods"
            :key="i"
            class="_f-2 _f-2-md tab _cs-pt _pdh-12px _pdv-16px _bdtw-1px _bdcl-neutral-400"
            @click="$router.replace({ query: { method: x.id } })" 
          >
            <div class="bio-radio">
              <input 
                :id="x.id" 
                :checked="$route.query.method === x.id" 
                :name="x.id" 
                type="radio"
              >
              <label :for="x.id">
                <h5 class="_pdl-4px _fw-300">{{ x.title }}</h5>
                <p class="_pdl-4px"/>
              </label>
              <div class="_pdl-24px">
                <BankTransfer 
                  v-if="x.id === 'bacs' && $route.query.method === $store.state.purchase.gateways[0].id" 
                  @pay-bank-transfer="confirmPayBankTransfer"/>
                <CreditCard 
                  v-if="x.id === 'omise' && $route.query.method === 'omise'" 
                  @pay-credit-card="confirmPayCard" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-12 col-md-4">
        <Summary 
          :cart="this.$store.state.purchase.cart"
          :items="Object.keys($store.state.purchase.cart.cart_contents).map(e => $store.state.purchase.cart.cart_contents[e])"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-buttons {
  .tab {
    padding: 10px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    &.active {
      border-bottom: 3px solid rgba(0, 0, 0, 0.5);
      font-weight: 700;
    }
  }
}
</style>


<script>
import Summary from '~/components/purchase/Summary'
import BankTransfer from '~/components/purchase/BankTransfer'
import CreditCard from '~/components/purchase/CreditCard'
// Remove cart
export default {
  components: {
    Summary,
    BankTransfer,
    CreditCard
  },
  async asyncData({ app, store }) {
    // Get payment gateways
    store.commit('purchase/SET_STEP', 2)
    const gateways = await store.dispatch('purchase/getPaymentGateways')
    if (gateways) {
      return store.commit(
        'purchase/SET_GATEWAYS',
        gateways.filter((x) => x.enabled)
      )
    }
  },
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `การชำระเงิน ${siteTitle}`
    }
  },
  layout: 'checkout',
  computed: {
    methods() {
      return this.$store.state.purchase.gateways
    }
  },
  watch: {
    '$route.query': {
      handler: 'checkQuery',
      immediate: true
    },
    '$store.state.purchase.cart.cart_contents'() {
      if (!Object.keys(this.$store.state.purchase.cart.cart_contents).length) {
        this.$router.replace({ path: '/' })
      }
    }
  },
  methods: {
    checkQuery() {
      // if (this.$route.query.method && )
      let gws = this.$store.state.purchase.gateways.map((x) => x.id)
      if (gws.indexOf(this.$route.query.method) === -1)
        return this.$router.replace({
          query: { method: this.$store.state.purchase.gateways[0].id }
        })
    },
    async pay(cardDetail) {
      // Freeze page
      // console.log(cardDetail)
      const res = await this.$store.dispatch(
        'purchase/payByCreditCard',
        cardDetail
      )
      if (res.id && res.data && res.data.customer_id) {
        this.$store.commit('purchase/SET_PURCHASING', false)
        return (window.location.href = `/checkout/payment/${res.id}`)
      }
      this.$store.commit('purchase/SET_PURCHASING', false)
      // success or fail with message
      // Take a minute, do not close this page
      // Create order from cart
      // let id = 'e3T8q4'
      // return this.$router.replace(`/checkout/payment/${id}`)
    },
    confirmPayCard(cardDetail) {
      const x = window.confirm('ยืนยันวิธีการชำระเงิน')
      if (x === true) return this.pay(cardDetail)
    },
    async confirmPayBankTransfer() {
      const x = window.confirm('ยืนยันวิธีการชำระเงิน')
      if (x === true) {
        this.$store.commit('purchase/SET_PURCHASING', true)
        this.isBtnLoading = true
        const res = await this.$store.dispatch('order/createOrder', {
          method: this.$store.state.purchase.gateways.find(
            (g) => g.id === 'bacs'
          )
        })
        // console.log(res)
        this.isBtnLoading = false
        if (res.id && res.data && res.data.customer_id) {
          this.$store.commit('purchase/SET_PURCHASING', false)
          return (window.location.href = `/store/checkout/payment/${res.id}`)
        }
        this.$store.commit('purchase/SET_PURCHASING', false)
        // Throw error
        window.alert('Error payment')
      }
    }
  }
}
</script>
