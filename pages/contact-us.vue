<template>
  <div class="container">
    <div class="row">
      <PageHeading 
        text="ติดต่อเจ้าหน้าที่"
      />
      <span class="_w-100pct -jtfct-ct _tal-ct _pdv-16px">
        Service Contact Number <span class="_fw-600">090 8468 4992</span>
      </span>
      <span class="_w-100pct -jtfct-ct _tal-ct">
        MON-FRI 12.00-16.00
      </span>
      <div class="col">
        <ContactUs />
      </div>
    </div>
    <div class="row _pdt-48px">
      <div class="col-12 _tal-ct">
        <h4>ที่อยู่ Maple Life Co., Ltd.</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bangkok Thailand
          90100
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from '~/components/text/PageHeading'
import ContactUs from '~/components/forms/ContactUs'

export default {
  components: {
      PageHeading,
      ContactUs
  },
  head () {
    const siteTitle = this.$store.state.site.title
    return { 
      title: `ติอต่อเจ้าหน้าที่ ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `ติอต่อเจ้าหน้าที่` },
        { hid: 'og:description', name: 'og:description', content: `ติอต่อเจ้าหน้าที่` }
      ]
    }
  }
}
</script>