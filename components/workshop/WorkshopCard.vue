<template>
  <div class="wrapper container _mgv-12px">
    <div class="row">
      <div 
        v-lazy:background="banner" 
        class="col-12 col-md-4 banner _bgpst-ct _bgs-cv"/>
      <div class="col-12 col-md-8 _bgcl-gray _pdh-8px _pdh-16px-md _pdv-12px _dp-f _fdrt-cl _jtfct-spbtw">
        <div class="_dp-f _fdrt-cl _jtfct-spar _h-100pct">
          <!-- Header -->
          <div>
            <h5 
              class="_lh-100pct" 
            >
              {{ header | titleLang }}
            </h5>
            <h6 
              class="_lh-100pct _fw-300" 
              v-html="`โดย ${instructor}`"/>
          </div>
          <!-- Schedule & Location -->
          <div class="_mgt-8px">
            <p class="_lh-125pct _fs-7">
              เริ่ม: {{ $moment(date.start_date).format('DD MMM YYYY') }} เวลา: {{ $moment(date.start_date).format('HH:mm น.') }}
            </p>
            <p class="_lh-125pct _fs-7">สถานที่: <span v-html="location"/></p>
          </div>
          <!-- Cost -->
          <div>
            <h6>ราคา <span v-html="price"/> บาท / ที่นั่ง</h6>
          </div>
        </div>
        <!-- See detail & Book -->
        <div class="row no-gutters _pdbt-12px">
          <div class="col _mgr-4px">
            <nuxt-link :to="`/workshop/${slug}`">
              <button class="bio-button _w-100pct -primary -outline">ดูรายละเอียด</button>
            </nuxt-link>
          </div>
          <div class="col _mgl-4px">
            <button 
              class="bio-button _w-100pct -primary -outline" 
              @click="addToCart">สำรองที่นั่ง</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default : 'x'
    },
    instructor: {
      type: String,
      default : 'x'
    },
    price: {
      type: String,
      default: '0'
    },
    location: {
      type: String,
      default: ''
    },
    date: {
      type: Object,
      default: () => {}
    },
    slug: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: null
    },
    workshopData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    async addToCart() {
      // alert('add')
      this.isBtnLoading = true
      // console.log(this.currentProduct)
      const added = await this.$store.dispatch('purchase/addToCart', {
        id: this.id,
        quantity: 1,
        variationId: null,
        data: this.workshopData
      })
      this.isBtnLoading = false
      this.$toast.show(`${1} item(s) added to bag`).goAway(3500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.banner {
  height: 200px;
  @include breakpoint(mobile) {
    height: 150px;
  }
}
</style>
