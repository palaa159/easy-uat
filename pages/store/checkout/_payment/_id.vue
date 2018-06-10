<template>
  <div class="container">
    <div class="row">
      <!-- ขอบคุณ -->
      <div class="col-12 col-md-8">
        <div class="_bgcl-white _pdh-16px _pdt-12px _pdbt-24px _mgbt-16px">
          <div class="_mgbt-16px">
            <h4 class="_cl-positive">
              <no-ssr>
                <fa-icon icon="check"/>
              </no-ssr>
              ขอบคุณสำหรับคำสั่งซื้อ
            </h4>
          </div>
          <!-- Order ID -->
          <div class="_fs-5 _mgbt-24px">
            <div class="_mgbt-4px">
              หมายเลขคำสั่งซื้อของคุณคือ <span class="_cl-warning">#{{ order.id }}</span>
            </div>
            <!-- <small>
              สามารถตรวจสอบสถานะการซื้อทั้งหมดได้
              <nuxt-link 
                class="bio-link -fancy" 
                to="/profile/orders">ที่นี่</nuxt-link>
            </small> -->
          </div>
          <!-- BACS -->
          <div 
            v-if="order.payment_method === 'bacs'" 
            class="_mgv-12px">
            <strong>กรุณาโอนเงินมาเลขบัญชีดังต่อไปนี้:</strong>
            <div class="bio-message -primary _mgv-16px">
              <h6 class="_lh-125pct">
                Siam Commercial Bank<br>
                xxxจำกัด<br>
                2222-222-222
              </h6>
            </div>
            <strong>แจ้งหลักฐานการโอนเงินได้ <nuxt-link 
              :to="`/profile/orders/${order.id}`" 
              class="_cl-primary">ที่นี่</nuxt-link></strong>
          </div>
          <!-- Email Confirmed -->
          <div class="_mgt-24px">
            <div class="bio-message">
              <div>
                <fa-icon :icon="['fal', 'paper-plane']"/>
                <span class="_mgl-8px">เราได้ส่งอีเมลยืนยันไปทาง {{ order.billing && order.billing.email }}</span>
              </div>
            </div>
          </div>
          <!-- Delivery -->
          <!-- <div class="_mgv-12px">
            <div class="bio-message">
              <div>
                <fa-icon :icon="['fal', 'truck']"/>
                <span class="_mgl-8px">คุณจะได้รับสินค้าภายในวันที่ xxx</span>
              </div>
            </div>
          </div> -->
          <!-- Continue shopping -->
          <!-- ช็อปต่อ -->
          <div class="_mgt-32px">
            <nuxt-link to="/">
              <button class="bio-button -info -outline _dp-ilb">
                <h5>เลือกซื้อของต่อ <fa-icon icon="long-arrow-alt-right"/></h5>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Summary -->
      <div class="col-12 col-md-4">
        <Summary 
          :cart="this.$store.state.purchase.cart"
          :summaryTotal="parseFloat(order.total)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Summary from '~/components/purchase/Summary'
export default {
  components: {
    Summary
  },
  data: () => ({
    order: {}
  }),
  async asyncData({ store, params }) {
    store.commit('purchase/SET_STEP', 3)
    store.commit('menu/SET_USER_MENU', true)
    // Fetch order from $route.params.id
    const order = await store.dispatch('order/getOrder', params.id)
    return {
      order
    }
  },
  validate({ params }) {
    // Check for valid order id
    if (params.id) {
      // Clear Cart
      // store.commit('purchase/CLEAR_CART')
      return true
    }
    return false
  },
  async mounted() {
    // Fetch order
    // If exists
    // Show order detail
    // If not
    // Redirect to homepage
  },
  layout: 'checkout'
}
</script>
