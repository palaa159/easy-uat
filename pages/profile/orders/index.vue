<template>
  <div>
    <div class="container">
      <div class="row _jtfct-ct">
        <div class="col-12 _mgv-12px">
          <h5>รายการสั่งซื้อของฉัน</h5>
          <!-- Order items -->
          <slide-y-down-transition 
            v-if="orders.length"
            group 
          >
            <div 
              v-for="(x, i) in orders" 
              :key="i">
              <OrderItem 
                :order-id="x.id"
                :order-status="x.status"
                :total="x.total"
                :purchase-items="[]"
                :date-modified="x.date_modified.date"
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
  </div>
</template>

<script>
import OrderItem from '~/components/purchase/OrderItem'

export default {
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `รายการสั่งซื้อ ${siteTitle}`
    }
  },
  components: {
    OrderItem
  },
  data: () => ({
    orders: []
  }),
  async mounted() {
    // Fetch all orders
    const orders = await this.$store.dispatch('order/getOrders')
    // console.log(orders)
    this.orders = orders
  },
  layout: 'profile'
}
</script>
