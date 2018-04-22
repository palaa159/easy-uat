<template>
  <div class="_pdh-16px _pdv-12px _mgv-12px item">
    <div class="bio-accordion -has-icon">
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
          <div>
            <h5>#{{ orderId }}</h5>
            <p class="_fs-7">THB {{ amount }}</p>
          </div>
          <!-- Right -->
          <div>
            <div class="status _fs-8 _pdv-8px _pdh-12px _cl-white _bdrd-24px">
              รอการยืนยันการชำระเงิน
            </div>
            <p class="_fs-8 _tal-ct">อัพเดทล่าสุด: 24/12/2018</p>
          </div>
        </div>
      </label>
      <div class="bio-accordion-content _pdh-0px">
        <!-- Action -->
        <div class="_mgv-16px">
          <button 
            class="bio-button -positive _w-100pct"
            @click="$modal.show('upload-slip', { orderId, amount })" 
          >ยืนยันการชำระเงิน</button>
        </div>
        <!-- Items -->
        <div>
          <div class="_dp-f _jtfct-spbtw">
            <h6>{{ purchaseItems.length }} รายการ</h6>
            <h6>ชำระโดย: โอนเงิน</h6>
          </div>
          <PurchaseItem 
            v-for="(item, i) in purchaseItems"
            :index="i"
            :key="i"
            :p-data="item"
            :editable="false"
          />
        </div>
      </div>
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
      default: () => ([]),
      type: Array
    },
    orderId: {
      default: '1234',
      type: String
    }
  },
  serverCacheKey: props => props.orderId,
  computed: {
    amount () {
      const reducer = (a, c) => a + c
      if (!this.purchaseItems.length) return 0
      return this.purchaseItems
        .map(x => x = x.price * x.amount)
        .reduce(reducer)
        .toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .status {
    background-color: red;
  }
</style>
