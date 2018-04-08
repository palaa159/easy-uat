<template>
  <div class="_pd-16px _mgv-12px item">
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
            <p class="_fs-8">อัพเดทล่าสุด: 24/12/2018</p>
          </div>
          <!-- Right -->
          <div class="status _fs-8 _pdv-8px _pdh-12px _cl-white _bdrd-24px">
            รอการจัดส่ง
          </div>
        </div>
      </label>
      <div class="bio-accordion-content">
        <PurchaseItem 
          v-for="(item, i) in purchaseItems"
          :index="i"
          :key="i"
          :p-data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseItem from '~/components/purchase/PurchaseItem'
export default {
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
