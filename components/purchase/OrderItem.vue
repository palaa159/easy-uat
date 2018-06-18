<template>
  <div class="_pdh-16px _pdv-12px _mgv-12px item">
    <div>
      <!-- Accordion item -->
      <input 
        :id="orderId" 
        type="checkbox"
        class="_dp-n">
      <label 
        :for="orderId" 
        class="_mg-0px">
        <div class="_dp-f _jtfct-spbtw _alit-ct _pdh-4px">
          <!-- Left -->
          <div class="_f-3">
            <h5>รหัสออเดอร์ #{{ orderId }}</h5>
            <p class="_fs-7">THB {{ total | currency }}</p>
          </div>
          <!-- middle -->
          <div class="_f-3">
            <div class="_tal-r">
              <div class="_tal-r _fs-7 _ttf-cptl">
                สถานะ: <strong>{{ _orderStatus }}</strong>
              </div>
              <span class="_fs-8">อัพเดทเมื่อ: {{ dateModified | moment('from') }}</span>
            </div>
          </div>
          <!-- Right -->
          <div class="_f-1 _tal-r">
            <nuxt-link 
              :to="`/profile/orders/${orderId}`" 
              class="_pdl-12px _pdv-12px _cl-primary">
              <fa-icon 
                :icon="['fas', 'search']" 
                size="lg"/>
            </nuxt-link>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import PurchaseItem from '~/components/purchase/PurchaseItem'
export default {
  name: 'OrderItem',
  components: {
    PurchaseItem
  },
  props: {
    purchaseItems: {
      default: () => [],
      type: Array
    },
    orderId: {
      default: 0,
      type: Number
    },
    orderStatus: {
      default: '',
      type: String
    },
    _: {
      default: '',
      type: String
    },
    total: {
      default: '',
      type: String
    },
    dateModified: {
      default: '',
      type: String
    }
  },
  computed: {
    _orderStatus () {
      if (this.orderStatus && this.orderStatus.toLowerCase() === 'pending') {
        return 'รอการแจ้งชำระเงิน'
      }
      return this.orderStatus
    }
  },
  serverCacheKey: (props) => props.orderId
}
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.status {
  // background-color: red;
}
</style>
