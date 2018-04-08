<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-md-10 _mgv-12px">
        <h5>รายการสั่งซื้อของฉัน</h5>
        <!-- Order items -->
        <slide-y-down-transition 
          v-if="items"
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
</template>

<script>
import OrderItem from '~/components/purchase/OrderItem'
export default {
  components: {
    OrderItem
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
  layout: 'profile'
}
</script>
