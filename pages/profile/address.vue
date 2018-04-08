<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-md-12 _mgv-12px">
        <h5 class="_pdh-16px">ข้อมูลที่อยู่ในการจัดส่ง</h5>
        <form 
          @submit.stop.prevent="update">
          <DeliveryAddress />
          <div class="_w-100pct _pdh-12px">
            <div 
              v-if="errorMsg" 
              class="bio-message -negative _mgbt-16px">
              {{ errorMsg }}
            </div>
            <button class="bio-button _w-100pct -info -outline">
              <h5>อัพเดท</h5>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DeliveryAddress from '~/components/forms/DeliveryAddress'
export default {
  components: {
    DeliveryAddress
  },
  data: () => ({
    errorMsg: 'x'
  }),
  layout: 'profile'
}
</script>
