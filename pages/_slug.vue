<template>
  <section class="_w-100pct">
    <div class="container">
      <!-- name -->
      <div class="row _pdt-24px">
        <div class="col-12">
          <div>
            <div 
              v-lazy:background-image="shop.profileImage" 
              class="_w-128px _h-128px _bdrd-50pct"/>
            <div class="_pdt-24px">
              <h3 
                v-html="shop.fullName"/>
              <div v-html="shop.description"/>
            </div>
          </div>
        </div>
      </div>
      <!-- products -->
      <div class="row _pdv-48px">
        <div 
          v-scroll-reveal="{delay: i * 100}" 
          v-for="(item, i) in shop.posts" 
          :key="i"
          class="col-6 col-md-4 _mgbt-16px">
          <!-- image -->
          <div 
            v-lazy:background-image="item.imageUrl" 
            class="image _pst-rlt">
            <div class="_pst-asl _bt-4px _r-4px">
              <button class="bio-button -warning _pdv-4px">
                <h6 class="_fs-7">CONTACT</h6>
              </button>
            </div>
          </div>
          <p 
            class="_pdv-8px _fs-7 _wsp-pl caption _ovfy-hd" 
            v-html="item.caption"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ params, app }) {
    const slug = params.slug
    const shop = await app.$axios.$get(`/user/${slug}`)
    return { shop }
  },
  head () {
    return {
      title: this.shop.fullName,
      meta: [{
        hid: 'og:title',
        name: 'og:title',
        content: this.shop.fullName
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: this.shop.description
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: this.shop.profileImage
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  padding-top: 100%;
}
.caption {
  height: 48px;
  padding: 0px 8px;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 24px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&1+0,0+100;White+to+Transparent */
    background: -moz-linear-gradient(
      bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
  }
  &:hover {
    height: auto;
    &::after {
      display: none;
    }
  }
}
</style>
