<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8">
        <div class="_pdv-16px _pdh-16px _bgcl-white">
          <!-- รายการสินค้า -->
          <div class="bio-accordion -has-icon">
            <input 
              id="items" 
              type="checkbox" 
              class="_dp-n">
            <label 
              for="items" 
              class="_mg-0px"><h5 class="_pdh-4px">รายการสินค้า ({{ Object.keys($store.state.purchase.cart.cart_contents).length }})</h5></label>
            <div class="bio-accordion-content">
              <!-- <PurchaseItem 
                v-for="(item, i) in $store.state.purchase.cart.cart_contents"
                :index="i"
                :key="i"
                :p-data="item"
              /> -->
            </div>
          </div>
        </div>
        <div class="_pdv-16px _mgv-24px _pdh-16px _bgcl-white">
          <!-- ที่อยู่สำหรับจัดส่ง -->
          <div class="bio-accordion -has-icon">
            <input 
              id="delivery" 
              type="checkbox" 
              checked
              class="_dp-n">
            <label 
              for="delivery" 
              class="_mg-0px"><h5 class="_pdh-4px">ข้อมูลการจัดส่ง</h5></label>
            <div class="bio-accordion-content _pd-0px">
              <!-- <DeliveryAddress />   -->
            </div>
          </div>
        </div>
      </div>
      <!-- Summary -->
      <div class="col-12 col-sm-4">
        <Summary 
          :items="Object.values($store.state.purchase.cart.cart_contents)"
        />
      </div>
    </div>
    <!-- รายการสินค้า -->
    <!-- ข้อมูลการจัดส่ง -->
    <!-- ตำแหน่งและวิธีการจัดส่ง -->
    <!-- ส่วนลด/ชำระเงิน -->
  </div>
</template>

<script>
  import PurchaseItem from '~/components/purchase/PurchaseItem'
  import DeliveryAddress from '~/components/forms/DeliveryAddress'
  import Summary from '~/components/purchase/Summary'
  export default {
    head () {
      const siteTitle = this.$store.state.site.title
      return { 
        title: `Checkout ${siteTitle}`
      }
    },
    layout: 'checkout',
    components: {
      PurchaseItem,
      DeliveryAddress,
      Summary
    },
    fetch ({ store, redirect }) {
      // Check if valid
      if (Object.keys(store.state.purchase.cart.cart_contents).length) {
        return true
      }
      return redirect('/')
    },
    watch: {
      '$store.state.purchase.cart.cart_contents' () {
        if (!Object.keys(this.$store.state.purchase.cart.cart_contents).length) {
          this.$router.replace({ path: '/' })
        }
      }
    }
  }
</script>
