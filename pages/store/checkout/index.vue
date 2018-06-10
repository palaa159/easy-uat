<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <!-- Items -->
        <div class="_pdv-16px _pdh-16px _mgbt-24px _bgcl-white">
          <Accordion 
            :force-show="false"
          >
            <h5 
              slot="title" 
              v-html="`รายการสินค้า (${totalQuantity})`"/>
            <div slot="content">
              <PurchaseItem 
                v-for="(value, key, i) in $store.state.purchase.cart.cart_contents"
                :index="i"
                :key="key"
                :p-data="value"
              />
            </div>
          </Accordion>
        </div>
        <div class="_pdv-16px _mgbt-24px _pdh-16px _bgcl-white">
          <!-- ที่อยู่สำหรับจัดส่ง -->
          <Accordion 
            :force-show="true">
            <h5 
              slot="title" 
              v-html="`ข้อมูลการจัดส่ง`"/>
            <div slot="content">
              <BillingAndShippingForm 
                @success="updateAddressSuccess"
              />
            </div>
          </Accordion>
        </div>
      </div>
      <!-- Summary -->
      <div class="col-12 col-md-4">
        <Summary 
          :items="Object.keys($store.state.purchase.cart.cart_contents).map(e => $store.state.purchase.cart.cart_contents[e])"
          :cart="this.$store.state.purchase.cart"
          proceed-btn-title="เลือกช่องทางชำระเงิน"
        />
      </div>
    </div>
    <!-- รายการสินค้า -->
    <!-- ข้อมูลการจัดส่ง -->
    <!-- ตำแหน่งและวิธีการจัดส่ง -->
    <!-- ส่วนลด/ชำระเงิน -->
  </div>
</template>

<script>
import Accordion from '~/components/extras/Accordion'
import PurchaseItem from '~/components/purchase/PurchaseItem'
import BillingAndShippingForm from '~/components/forms/BillingAndShippingForm'
import Summary from '~/components/purchase/Summary'
export default {
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `Store Checkout ${siteTitle}`
    }
  },
  layout: 'checkout',
  scrollToTop: true,
  components: {
    Accordion,
    PurchaseItem,
    BillingAndShippingForm,
    Summary
  },
  computed: {
    totalQuantity() {
      const contents = this.$store.state.purchase.cart.cart_contents
      const reducer = (a, c) => a + c
      if (!Object.keys(contents).length) return 0
      return Object.keys(contents)
        .map((e) => contents[e])
        .map((x) => (x = x.quantity))
        .reduce(reducer)
    }
  },
  watch: {
    '$store.state.purchase.cart.cart_contents'() {
      if (!Object.keys(this.$store.state.purchase.cart.cart_contents).length) {
        this.$router.replace({ path: '/' })
      }
    }
  },
  methods: {
    async updateAddressSuccess() {
      return this.$router.push('/store/checkout/payment')
    }
  }
}
</script>
