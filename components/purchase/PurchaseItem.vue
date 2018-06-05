<template>
  <div 
    :class="{'is-processing': isProcessing}" 
    class="_dp-f _mgv-12px item">
    <!-- Image -->
    <div 
      v-lazy:background-image="pData.images && pData.images[0].src"
      class="image _f-2 _ratio" 
    />
    <!-- Detail -->
    <div class="_mgl-12px _dp-f _f-8 _fdrt-cl _jtfct-spbtw _pdv-4px _pdv-8px-md _pdh-2px _pdh-12px-md">
      <h6 
        class="_lh-100pct _mgbt-4px _ttf-upc" 
        v-html="`${pData.name}${pData.variation_id? ' (' + pData.variations.find(x => x.id === pData.variation_id).sku + ')': ''}`" />
      <!-- Amount -->
      <div class="_w-100pct">
        <QuantityCalc
          :quantity="pData.quantity" 
          :discounts="pData.discounts || {}"
          :line-total="_lineTotal"
          :editable="editable"
          @adjust-item="onAdjust"
        />
      </div>
    </div>
    <!-- Remove -->
    <div 
      v-if="editable"
      class="_mgh-2px _mgv-8px _f-1 _cl-accent-300 _tal-r" 
    >
      <div 
        class="_cs-pt"
        @click="remove(pData.key)">
        ❌
      </div>
    </div>
  </div>
</template>

<script>
import QuantityCalc from '~/components/purchase/QuantityCalc'
export default {
  name: 'PurchaseItem',
  components: {
    QuantityCalc
  },
  props: {
    editable: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      default: 1
    },
    pData: {
      type: Object,
      default: () => ({
        id: 1,
        title: 'aaa',
        price: 12000,
        image: 'http://via.placeholder.com/350x350',
        amount: 1
      })
    }
  },
  data: () => ({
    isProcessing: false
  }),
  computed: {
    _lineTotal() {
      return (
        parseFloat(this.pData.total) ||
        parseFloat(this.pData.line_total) ||
        parseFloat(this.pData.price)
      )
    }
  },
  // serverCacheKey: props => props.index,
  methods: {
    async remove(key) {
      this.isProcessing = true
      await this.$store.dispatch('purchase/removeFromCart', key)
      this.isProcessing = false
    },
    async onAdjust(n) {
      // console.log(`on adjust: ${n}`)
      this.isProcessing = true
      const cart = await this.$store.dispatch(
        'purchase/updateProductQuantity',
        {
          keyId: this.pData.key,
          quantity: this.pData.quantity + n
        }
      )
      this.isProcessing = false
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  &.is-processing {
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      display: inline-block;
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left-color: #7983ff;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: donut-spin 0.6s linear infinite;
      z-index: 2;
    }
  }
}
.image {
  min-width: 64px;
  max-width: 150px;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
