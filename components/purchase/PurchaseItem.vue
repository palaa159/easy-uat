<template>
  <div class="_dp-f _mgv-12px">
    <!-- Image -->
    <div 
      v-lazy:background-image="pData.images && pData.images[0].src || ''"
      class="image _f-2 _ratio" 
    />
    <!-- Detail -->
    <div class="_mgl-12px _dp-f _f-8 _fdrt-cl _jtfct-spbtw _pdv-4px _pdv-8px-md _pdh-2px _pdh-12px-md">
      <h6 
        class="_lh-100pct _mgbt-4px" 
        v-html="`${pData.name}`" />
      <!-- Amount -->
      <div class="_w-100pct">
        <QuantityCalc
          :quantity="pData.quantity" 
          :line-total="pData.line_total"
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
        @click="$store.dispatch('purchase/removeFromCart', pData.key)">
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
          title: 'เครื่องตรวจระดับนำตาลในเลือก SD CHECK GOLD',
          price: 12000,
          image: 'http://via.placeholder.com/350x350',
          amount: 1
        })
      }
    },
    // serverCacheKey: props => props.index,
    methods: {
      async onAdjust (n) {
        console.log(`on adjust: ${n}`)
        const cart = await this.$store.dispatch('purchase/updateProductQuantity', {
          keyId: this.pData.key,
          quantity: this.pData.quantity + n
        })
        // this.$store.commit('purchase/SET_PROD_CART_AMT', { 
        //   id: this.pData.id,
        //   amount: this.pData.amount + n
        // })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    min-width: 64px;
    max-width: 150px;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
