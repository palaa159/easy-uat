<template>
  <div class="_dp-f _jtfct-ct">
    <div class="_tal-l">
      <div class="_fs-6">THB</div>
      <div class="_fs-4 _mgbt-8px">{{ price.toFixed(2) }}</div>
      <!-- Buy now btn -->
      <button 
        :class="{'-loading': isLoading}"
        :disabled="isLoading"
        class="bio-button -gradient _ttf-upc _fw-700 _pdv-4px _bdw-0px" 
        @click="buy">Buy Now!</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      price: {
        type: Number,
        default: 0.00
      },
      isLoading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      buy () {
        this.$emit('clickBuyNow')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .-gradient {
    /* Rectangle 5: */
    background-image: linear-gradient(-180deg, #9914FF 0%, #6A17F0 100%);
    border-radius: 3px;
  }
  .-loading {
    &::after {
      top: calc(50% - 0.5em);
    }
  }
</style>
