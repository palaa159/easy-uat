<template>
  <div class="_dp-f _jtfct-spbtw _alit-ct">
    <!-- quantity -->
    <div class="_dp-f _alit-ct">
      <div class="_dp-f ctn _bdrd-4px _ovf-hd">
        <!-- - -->
        <div 
          v-if="editable"
          class="minus _bgcl-neutral-300 _cs-pt _pd-16px"
          @click="quantity > 1 && $emit('adjust-item', -1)" 
        >
          <fa-icon :icon="['far', 'minus']"/>
        </div>
        <!-- Num -->
        <div 
          class="number _pdh-16px _dp-f _alit-ct _bgcl-neutral-100" 
          style="height: 50px;">
          <span 
            v-if="!editable" 
            class="_mgr-8px">จำนวน:</span>
          <span class="_fs-4 _fw-600">
            {{ quantity }}
          </span>
        </div>
        <!-- + -->
        <div 
          v-if="editable"
          class="plus _bgcl-neutral-300 _cs-pt _pd-16px"
          @click="quantity < maxQuantity && $emit('adjust-item', 1)"
        >
          <fa-icon :icon="['far', 'plus']"/>
        </div>
      </div>
      <h5 class="_mgl-16px">{{ unit }}</h5>
    </div>
    <!-- Total price -->
    <div class="_dp-n _dp-b-sm">
      <div class="_tal-l">THB</div>
      <div class="_lh-100pct _fs-4">{{ (price * quantity).toFixed(2) }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      editable: {
        type: Boolean,
        default: true
      },
      unit: {
        type: String,
        default: ''
      },
      price: {
        type: Number,
        default: 0
      },
      quantity: {
        type: Number,
        default: 1
      },
      maxQuantity: {
        type: Number,
        default: 9
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ctn {
    // border: 2px solid rgba(0, 0, 0, 0.7);
  }
  .minus {

  }
</style>
