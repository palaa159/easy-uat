<template>
  <section class="_w-100pct">
    <div class="container">
      <!-- name -->
      <div class="row">
        <div class="col-12">
          <div>
            <div 
              v-lazy:background-image="shop.profileImage" 
              class="_w-128px _h-128px _bdrd-50pct"/>
            <div class="_pdl-24px">
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
          v-for="(item, i) in shop.posts" 
          :key="i" 
          class="col-6 col-md-4 _mgbt-16px">
          <!-- image -->
          <div 
            v-lazy:background-image="item.imageUrl" 
            class="image"/>
          <button class="bio-button _w-100pct -accent">
            <h6>BUY NOW</h6>
          </button>
          <p 
            class="_pdv-8px _fs-7 _wsp-p" 
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
  async mounted () {
  }
  
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  padding-top: 100%;
}
</style>
