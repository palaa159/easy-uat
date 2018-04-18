<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-md-10 _mgv-12px">
        <h5>รายการส่งคืน (Refund)</h5>
        <!-- Order items -->
        <slide-y-down-transition 
          v-if="items.length"
          group 
        >
          <div 
            v-for="(x, i) in items" 
            :key="i"/>
        </slide-y-down-transition>
        <div 
          v-else
          class="_pdt-16px" 
        >
          <p class="_cl-warning">
            คุณยังไม่มีรายการส่งคืนของ
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    const siteTitle = this.$store.state.site.title
    return { 
      title: `รายการคืนสินค้า ${siteTitle}`
    }
  },
  data: () => ({
    items: []
  }),
  layout: 'profile'
}
</script>
