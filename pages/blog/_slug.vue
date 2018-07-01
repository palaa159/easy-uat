<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div 
        id="content" 
        class="col-12 col-md-9">
        <div class="_mgt-16px">
          <h3 
            class="_lh-100pct _mgt-48px" 
            v-html="content.post_title"/>
          <p>{{ content.post_date | moment('วันที่ DD MMMM YYYY HH:mm') }}</p>
        </div>
        <div 
          v-if="content.acf.assets.youtube_full.length >= 40"
          class="_pdv-32px embed-responsive embed-responsive-21by9 _mgv-24px">
          <iframe 
            :src="`${content.acf.assets.youtube_full}?rel=0`" 
            class="embed-responsive-item" 
            />
        </div>
        <div 
          v-lazy:background="content.acf.assets.featured_image" 
          v-else 
          class="image _bgrp-nrp _bgs-cv _mgv-24px _bgpst-ct"/>
        <ContentFromWP :content="content.acf.content" />
        <!-- Comments -->
        <h4>Comments</h4>
        <!-- Products -->
        <h4>Related Products</h4>
        <!-- Explore more content -->
        <h4>More content</h4>
      </div>
      <div class="col-12 col-md-2">
        <no-ssr>
          <affix 
            :enabled="_enabled"
            :offset="{ top: -140, bottom: 0 }"
            :scroll-affix="false" 
            relative-element-selector="#content">
            <div style="margin-top: 100px;">
              <!-- Related products -->
              <div v-if="content.acf.related_products" >
                <h5>สินค้าที่เกี่ยวข้อง</h5>
                <div 
                  class="container-fluid _pd-0px _mgt-16px">
                  <div class="row">
                    <div 
                      v-for="(p, i) in content.acf.related_products" 
                      :key="i" 
                      class="col-12 _mgbt-24px">
                      <Card
                        v-if="p"
                        :key="i"
                        :title="p.name" 
                        :image="p.image"
                        :price="p.price_html"
                        :slug="p.slug"
                        :badge="p"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- {{ content.acf.related_products }} -->
            </div>
          </affix>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import ContentFromWP from '~/components/content/ContentFromWP'
import Card from '~/components/products/Card'
export default {
  components: {
    ContentFromWP,
    Card
  },
  async asyncData({ store, params, redirect }) {
    const slug = params.slug
    const content = await store.dispatch('content/getContent', { slug })
    if (!content) {
      // return redirect('400')
    }
    // console.log(content)
    return { content: content[0] }
  },
  scrollToTop: true,
  computed: {
    _enabled() {
      if (process.browser) {
        return window.innerWidth > 770
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 400px;
}
</style>
