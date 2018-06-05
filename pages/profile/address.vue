<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-md-12 _mgv-12px">
        <!-- <h5 class="_pdh-16px">ข้อมูลที่อยู่ในการจัดส่ง</h5> -->
        <BillingAndShippingForm 
          proceed-btn-title="บันทึก"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BillingAndShippingForm from '~/components/forms/BillingAndShippingForm'
export default {
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `ที่อยู่ในการจัดส่ง ${siteTitle}`
    }
  },
  components: {
    BillingAndShippingForm
  },
  data: () => ({
    errorMsg: 'x'
  }),
  layout: 'profile'
}
</script>
