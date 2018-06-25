<template>
  <!-- Hero Image -->
  <div class="_w-100pct">
    <div 
      v-lazy:background="workshop.image" 
      class="container-fluid hero-image _bgs-cv _bgpst-ct _bgrp-nrp">
      <div class="row _pst-rlt _zid-0">
        <div class="col-12 _h-256px _h-512px-md _cl-white _dp-f _alit-ct _jtfct-ct">
          <h1 class="_lh-125pct _fs-4 _fs-1-md">
            <span class="_dp-ilb _fw-300">Workshops</span>
            <span class="_dp-ilb _mgh-4px">
              <fa-icon 
                :icon="['fas', 'chevron-right']" 
                size="xs"
              />
            </span>
            <span class="_dp-ilb">{{ workshop.name | titleLang }}</span>
          </h1>
        </div>
      </div>
    <!--  -->
    </div>
    <div class="container">
      <div class="row _jtfct-ct _pdv-24px">
        <div class="col-12 col-md-7">
          <h4 class="_bdbtw-4px _cl-neutral _fw-300">รายละเอียด Workshop</h4>
          <h5 class="_mgbt-8px _mgt-24px">ทีมสอน</h5>
          <div class="_dp-f _alit-ct _mgbt-16px">
            <div 
              class="_bdrd-50pct _dp-ilb _ovf-hd" 
              v-html="workshop.acf.instructor[0].user_avatar"/>
            <h6 class="_mgl-8px">{{ workshop.acf.instructor[0].display_name }}</h6>
          </div>
          <h5 class="_mgv-8px">เริ่มเรียน: {{ workshop.acf.date.start_date | moment('DD/MM/YYYY HH:mm น.') }}</h5>
          <h5 class="_mgv-8px">ราคา: {{ workshop.price | currency }}</h5>
          <div class="_mgv-24px">
            <button 
              v-if="workshop.stock_status === 'instock'"
              :class="{'_bgcl-primary': !isDisabled, '-disabled': isDisabled, '-loading': isBtnLoading}" 
              :disabled="isDisabled" 
              class="bio-button _w-100pct _w-50pct-md -white -outline" 
              @click="addToCart">สำรองที่นั่ง</button>
            <p 
              v-else 
              class="_cl-accent">เต็มแล้ว</p>
          </div>
          <p 
            class="_mgv-24px" 
            v-html="$options.filters.titleLang(workshop.description)"/>
            <!-- {{ workshop }} -->
        </div>
        <div class="col-12 col-md-3">
          <h4 class="_bdbtw-4px _cl-neutral _fw-300">&nbsp;</h4>
          <div class="_mgt-24px">
            <h5 class="_mgv-8px">ระดับ: Beginner</h5>
            <h5 class="_mgv-8px">ลงทะเบียนแล้ว: {{ workshop.total_sales }} คน</h5>
            <div class="_mgv-8px">
              <h5>สถานที่เรียน:</h5>
              <p class="_mgbt-12px">{{ workshop.acf.location.description }}</p>
              <iframe 
                :src="`https://maps.google.com/maps?q=${workshop.acf.location.map.lat},${workshop.acf.location.map.lng}&hl=th;z=12&amp;output=embed`" 
                style="border: 0;" 
                width="100%" 
                height="250" 
                frameborder="0" 
                allowfullscreen="allowfullscreen"
              />
            </div>
          </div>
          <h4 class="_bdbtw-4px _cl-neutral _fw-300">อื่นๆที่น่าสนใจ</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pkg from '~/package.json'
export default {
  async asyncData ({ store, params }) {
    const workshop = await store.dispatch('workshop/getWorkshop', {
      slug: params.slug
    })
    return { workshop: workshop[0] }
  },
  data: () => ({
    isBtnLoading: false,
    isDisabled: false
  }),
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `${this.workshop.name} ${siteTitle}`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.workshop.name} ${siteTitle}`
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `${pkg.url}` + this.$route.fullPath
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.workshop.description}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${(this.workshop.image) || ''}`
        }
      ]
    }
  },
  methods: {
    async addToCart() {
      // alert('add')
      this.isBtnLoading = true
      // console.log(this.currentProduct)
      const added = await this.$store.dispatch('purchase/addToCart', {
        id: this.workshop.id,
        quantity: 1,
        variationId: null,
        data: this.workshop
      })
      this.isBtnLoading = false
      this.$toast.show(`${1} item(s) added to bag`).goAway(3500)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-image {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    // background: linear-gradient(
    //   to bottom,
    //   rgba(40, 40, 40, 1) 0%,
    //   rgba(40, 40, 40, 0.6) 25%,
    //   rgba(0, 0, 0, 0) 70%
    // );
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
