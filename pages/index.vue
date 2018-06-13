<template>
  <div class="_w-100pct">
    <!-- Slide -->
    <!-- <div class="_w-100pct _bgcl-gray _h-256px _h-512px-md">
      <Slideshow
        :slides="topSlides"
      />
    </div> -->
    <!-- สินค้ามาใหม่ -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <h6 class="_pdv-16px">ดูสินค้าตามหมวดหมู่</h6>
          <div class="row">
            <nuxt-link 
              v-for="(item, i) in $store.state.product.categories" 
              :to="`/store/${item.slug}`"
              :key="i"
              class="bio-link _cl-neutral-600 _cl-neutral-800-hover col-6 col-md-12">
              <div 
                class="_dp-f _alit-ct _pdv-8px _bdbtw-1px _bdcl-neutral-300 _bdcl-neutral-600-hover">
                <div 
                  v-lazy:background-image="item.image || ''" 
                  class="_h-24px _bgrp-nrp _bgs-ct _bgpst-l _f-1"/>
                <h6 class="_lh-100pct _f-4">{{ item.name }}</h6>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <h6 class="_pdv-16px">สินค้ามาใหม่</h6>
          <div>
            <ProductCardsColumn 
              :products="featuredProducts"
              :limit="8"
              _class="col-6 col-md-3"
            />
          </div>
          <!-- Enter Store -->
          <div class="_mgbt-48px">
            <nuxt-link 
              class="_dp-ilb" 
              to="/store">
              <button class="bio-button -dark _bdcl-tpr">
                ดูสินค้าทั้งหมด
                <fa-icon icon="long-arrow-alt-right"/>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="_w-100pct _bgcl-gray">
      <div class="container">
        <div class="row">
          <div class="col-12 _pdbt-24px">
            <h4 class="_pdt-12px">คอนเท๊นต์</h4>
            <!-- Agile -->
            <ContentSlideshow
              :slides="contentSlides"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Makerspace Workshop -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="_pdv-12px">Makerspace Workshop</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rem quia. Iure quod nobis voluptate eveniet minima animi tempora sunt perspiciatis aliquam ut sit, consequatur eligendi soluta, ex enim illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores blanditiis omnis, sed, error unde dolores, repudiandae architecto doloribus vitae commodi aut quos? Minus, iure? Eaque totam eligendi deserunt natus nostrum.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from '~/components/slideshows/Slideshow'
import ContentSlideshow from '~/components/slideshows/ContentSlideshow'
import ProductCardsColumn from '~/components/products/ProductCardsColumn'
import HomeCategories from '~/components/categories/HomeCategories'
export default {
  components: {
    Slideshow,
    ProductCardsColumn,
    HomeCategories,
    ContentSlideshow
  },
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `หน้าแรก ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `หน้าแรก` },
        { hid: 'og:description', name: 'og:description', content: `หน้าแรก` }
      ]
    }
  },
  data: () => ({
    topSlides: [],
    featuredProducts: [],
    categories: [],
    contentSlides: []
  }),
  async asyncData({ store }) {
    const promises = [
      store.dispatch('content/getSlideshow', {
        slug: 'homepage-banner'
      }),
      store.dispatch('product/getFeaturedProducts'),
      store.dispatch('content/getContent', { featured: true })
    ]
    const [topSlides, featuredProducts, contentSlides] = await Promise.all(
      promises
    )
    return {
      topSlides,
      featuredProducts,
      contentSlides
    }
  }
}
</script>
<style lang="scss" scoped>
.hero-image {
  width: 100%;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  &[lazy='loaded'] {
    filter: drop-shadow(0mm 5mm 4mm rgba(0, 0, 0, 0.15));
  }
}
h1 {
  font-family: 'Kanit', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.4rem;
  letter-spacing: 3px;
  color: #182f69;
}
</style>
