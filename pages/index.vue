<template>
  <div class="_w-100pct">
    <!-- Slide -->
    <div class="_w-100pct _bgcl-gray top-slider">
      <Slideshow
        :slides="topSlides"
      />
    </div>
    <!-- สินค้ามาใหม่ -->
    <!-- Content -->
    <div class="_w-100pct content-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 _pdv-24px">
            <!-- <h4 class="_pdt-12px">คอนเท๊นต์</h4> -->
            <!-- Agile -->
            <ContentSlideshow
              :slides="contentSlides"
            />
          </div>
        </div>
      </div>
    </div>
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
    <!-- Makerspace Workshop -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="_pdv-12px _dp-f _jtfct-spbtw">
            <div>
              <h3 class="_lh-100pct">
                Workshops & Events
              </h3>
              <h6>Workshop ที่น่าสนใจของ MakerStation</h6>
            </div>
            <div>
              <nuxt-link 
                :to="`/workshop`"
                class="bio-link">
                ดูทั้งหมด
              </nuxt-link>
            </div>
          </div>
          <div class="row">
            <div 
              v-for="(wk, i) in workshops" 
              :key="i" 
              class="col-12 col-md-6">
              <WorkshopCard 
                :banner="wk.image"
                :header="wk.name"
                :instructor="wk.acf.instructor[0].display_name"
                :price="wk.price"
                :location="wk.acf.location.description"
                :date="wk.acf.date"
                :id="wk.id"
                :workshop-data="wk"
              />
            </div>
          </div>
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
import WorkshopCard from '~/components/workshop/WorkshopCard'
export default {
  components: {
    Slideshow,
    ProductCardsColumn,
    HomeCategories,
    ContentSlideshow,
    WorkshopCard
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
    contentSlides: [],
    workshops: []
  }),
  created() {
    this.$store.dispatch('content/getSlideshow', {
      slug: 'homepage-banner'
    }).then((topSlides) => this.topSlides = topSlides)
    this.$store.dispatch('product/getFeaturedProducts').then((featuredProducts) => this.featuredProducts = featuredProducts),
    this.$store.dispatch('content/getContent', { featured: true }).then((contentSlides) => this.contentSlides = contentSlides)
    this.$store.dispatch('workshop/getWorkshop', {}).then((workshops) => this.workshops = workshops)
    // const [topSlides, featuredProducts, contentSlides] = await Promise.all(
    //   promises
    // )
  
  }
}
</script>
<style lang="scss" scoped>
@import 'assets/styles/variables';
.top-slider {
  height: 480px;
  @include breakpoint(mobile) {
    height: 256px;
  }
}
</style>
