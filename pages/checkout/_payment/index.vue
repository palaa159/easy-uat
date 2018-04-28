<template>
  <div class="container">
    <!--  -->
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="_pd-16px _bgcl-white">
          <!-- Tabs -->
          <div class="tab-container">
            <div class="_dp-f tab-buttons">
              <div
                v-for="(x, i) in methods"
                :key="i"
                :class="{'active': $route.query.method === x.slug}"
                class="_f-2 _f-2-md tab _cs-pt _tal-ct"
                @click="$router.replace({ query: { method: x.slug } })" 
              >
                {{ x.title }}
              </div>
              <div class="_f-0 _dp-n _dp-b-md _f-5-md tab">
                &nbsp;
              </div>
            </div>
          </div>
          <!-- Content -->
          <div class="_pdt-24px _pdbt-12px">
            <div class="_pdt-16px _pdbt-32px">
              <BankTransfer v-if="$route.query.method === 'bank-transfer'" />
              <CreditCard v-else />
            </div>
            <!-- Submit Button -->
            <no-ssr>
              <button 
                class="bio-button _w-100pct _w-50pct-md -positive" 
                @click="pay()">
                <h5>สั่งซื้อ</h5>
              </button>
            </no-ssr>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <Summary 
          :items="$store.state.purchase.items"
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
    head () {
      const siteTitle = this.$store.state.site.title
      return { 
        title: `การชำระเงิน ${siteTitle}`
      }
    },
    data: () => ({
      methods: [
        {
          title: 'โอนเงินผ่านธนาคาร',
          slug: 'bank-transfer'
        },
        {
          title: 'บัตรเครดิต / เดบิต',
          slug: 'credit-card'
        }
      ]
    }),
    layout: 'checkout',
    watch: {
      '$route.query' () {
        return this.checkQuery()
      }
    },
    // Validate query
    created () {
      return this.checkQuery()
    },
    methods: {
      checkQuery () {
        if (!(this.$route.query.method === 'bank-transfer' || this.$route.query.method === 'credit-card')) {
          return this.$router.replace({ query: { method: 'bank-transfer' } })
        }
      },
      pay () {
        let id = 'e3T8q4'
        return this.$router.replace(`/checkout/payment/${id}`)
      }
    },
  }
</script>
