<template>
  <div>
    <no-ssr>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 _pdh-0px">
            <Card v-model="cardDetail" />
            <float-label>
              <input 
                v-card-focus
                v-model="cardDetail.number" 
                name="number" 
                placeholder="Card number" 
                type="tel" 
              >
            </float-label>
            <float-label>
              <input 
                v-card-focus
                v-model="cardDetail.name" 
                name="name" 
                placeholder="Full name" 
                type="text" 
              >
            </float-label>
            <float-label>
              <input 
                v-card-focus
                v-model="cardDetail.expiry" 
                name="expiry" 
                placeholder="MM/YY" 
                type="tel" 
              >
            </float-label>
            <float-label>
              <input 
                v-card-focus
                v-model="cardDetail.cvc" 
                name="cvc" 
                placeholder="CVC" 
                type="number" 
              >
            </float-label>
          </div>
          <!--  -->
          <div class="col-12 col-lg-6 _dp-f _alit-ct _jtfct-ct">
            <div class="_tal-ct _mgt-16px">
              <p>Secured by:</p>
              <img 
                class="_w-40pct"
                src="~/assets/images/other/omise-logo.png" 
                alt="Omise">
            </div>
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>

let defaultProps = {
  number: '',
  name: '',
  expiry: '',
  cvc: ''
}
export default {
  data: () => ({
    cardDetail: defaultProps
  })
}
</script>
