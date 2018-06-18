<template>
  <div 
    :class="{'is-processing': isProcessing}" 
    class="_dp-f _mgv-12px item">
    <!-- Image -->
    <nuxt-link 
      v-lazy:background-image="_image" 
      :to="`/store/product/${pData.slug}`"
      class="_f-2 image _ratio"/>
    <!-- Detail -->
    <div class="_mgl-12px _dp-f _f-8 _fdrt-cl _jtfct-spbtw _pdv-4px _pdv-8px-md _pdh-2px _pdh-12px-md">
      <nuxt-link :to="`/store/product/${pData.slug}`">        
        <h6 
          class="_lh-100pct _mgbt-4px _cl-neutral-800" 
        >
          {{ _title | titleLang }}
        </h6>
      </nuxt-link>
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
    _image() {
      if (this.pData.order_id) {
        return this.pData.images && this.pData.images[0].src
      }
      if (!this.pData.variation) {
        return this.pData.images && this.pData.images[0].src || this.pData.image
      }
      if (this.pData.variations) {
        return this.pData.variations.find(
          (x) => x.id === this.pData.variation_id
        ).image.src
      }
    },
    _lineTotal() {
      return (
        parseFloat(this.pData.total) ||
        parseFloat(this.pData.line_total) ||
        parseFloat(this.pData.price)
      )
    },
    _title() {
      if (this.pData.variation_id && this.pData.variations) {
        return `${this.pData.name}${
          this.pData.variations.find((x) => x.id === this.pData.variation_id)
            ? ' (' +
              this.pData.variations.find(
                (x) => x.id === this.pData.variation_id
              ).attributes[0].option +
              ')'
            : ''
        }`
      }
      return this.pData.name
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
