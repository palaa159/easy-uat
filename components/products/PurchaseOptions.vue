<template>
  <div class="row _dp-f _jtfct-spbtw _alit-fe">
    <!-- Amount -->
    <div class="_dp-f ctn _bdrd-4px _ovf-hd">
      <!-- - -->
      <div 
        v-if="editable"
        class="minus _bgcl-neutral-300 _cs-pt _pd-8px"
        @click="amount > 1 && $emit('adjust-item', -1)" 
      >
        <fa-icon :icon="['far', 'minus']"/>
      </div>
      <!-- Num -->
      <div class="number _pdh-12px _h-32px _dp-f _alit-ct _bgcl-neutral-100">
        <span 
          v-if="!editable" 
          class="_mgr-8px">จำนวน:</span>
        <span>
          {{ amount }}
        </span>
      </div>
      <!-- + -->
      <div 
        v-if="editable"
        class="plus _bgcl-neutral-300 _cs-pt _pd-8px"
        @click="amount <= 19 && $emit('adjust-item', 1)"
      >
        <fa-icon :icon="['far', 'plus']"/>
      </div>
    </div>
    <!-- Total price -->
    <div>
      <div class="_tal-r">THB</div>
      <h4 class="_lh-100pct">{{ (price * amount).toLocaleString() }}</h4>
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
      price: {
        type: Number,
        default: 0
      },
      amount: {
        type: Number,
        default: 1
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
