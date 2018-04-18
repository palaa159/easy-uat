<template>
  <div>
    <div class="container">
      <div class="row _jtfct-ct">
        <div class="col-12 col-md-10 _mgv-12px">
          <h5>รายการสั่งซื้อของฉัน</h5>
          <!-- Order items -->
          <slide-y-down-transition 
            v-if="items.length"
            group 
          >
            <div 
              v-for="(x, i) in items" 
              :key="i">
              <OrderItem 
                :order-id="x.id"
                :purchase-items="$store.state.purchase.items"
              />
            </div>
          </slide-y-down-transition>
          <div 
            v-else
            class="_pdt-16px" 
          >
            <p class="_cl-warning">
              คุณยังไม่มีรายการซื้อของ
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <UploadSlip 
      @success="successUpload"
    />
  </div>
</template>

<script>
import OrderItem from '~/components/purchase/OrderItem'
import UploadSlip from '~/components/modals/UploadSlip'
export default {
  head () {
    const siteTitle = this.$store.state.site.title
    return { 
      title: `รายการสั่งซื้อ ${siteTitle}`
    }
  },
  components: {
    OrderItem,
    UploadSlip
  },
  data: () => ({
    items: []
  }),
  mounted () {
    this.items = [{
      id: 'xxxxx'
    }, {
      id: '7777'
    }]
  },
  methods: {
    successUpload (url) {
      // TODO: Update URL to database
      // TODO: Send Email
      console.log(url)
    }
  },
  layout: 'profile'
}
</script>
