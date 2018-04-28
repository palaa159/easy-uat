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
              หมายเลขคำสั่งซื้อของคุณคือ <span class="_cl-warning">XXXXX</span>
            </div>
            <small>
              สามารถตรวจสอบสถานะการซื้อทั้งหมดได้
              <nuxt-link 
                class="bio-link -fancy" 
                to="/profile/orders">ที่นี่</nuxt-link>
            </small>
          </div>
          <!-- Email Confirmed -->
          <div class="_mgv-12px">
            <div class="bio-message">
              <div>
                <fa-icon icon="paper-plane"/>
                <span class="_mgl-8px">เราได้ส่งอีเมลยืนยันไปทาง xxx@fff.ccc</span>
              </div>
            </div>
          </div>
          <!-- Delivery -->
          <div class="_mgv-12px">
            <div class="bio-message">
              <div>
                <fa-icon icon="truck"/>
                <span class="_mgl-8px">คุณจะได้รับสินค้าภายในวันที่ xxx</span>
              </div>
            </div>
          </div>
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
          :items="[]"
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
  fetch ({ store }) {
    // Check for valid order id
    if (true) {
      // Clear Cart
      // store.commit('purchase/CLEAR_CART')
    }
    return
  },
  layout: 'checkout'
}
</script>
