<template>
  <div class="container">
    <div class="row">
      <div 
        id="content" 
        class="col-12 col-md-9">
        <div class="_mgt-16px">
          <h3 
            class="_lh-100pct" 
            v-html="content.post_title"/>
          <p>{{ content.post_date | moment('วันที่ DD MMMM YYYY HH:mm') }}</p>
        </div>
        <div 
          class="_pdv-32px embed-responsive embed-responsive-21by9 _mgv-24px">
          <iframe 
            :src="`${content.acf.assets.youtube_full}?rel=0`" 
            class="embed-responsive-item" 
            allowfullscreen/>
        </div>
        <ContentFromWP :content="content.acf.content" />
        <!-- Comments -->
        <h4>Comments</h4>
        <!-- Products -->
        <h4>Related Products</h4>
        <!-- Explore more content -->
        <h4>More content</h4>
      </div>
      <div class="col-12 col-md-3">
        <no-ssr>
          <affix 
            :enabled="_enabled"
            :offset="{ top: -140, bottom: 0 }"
            :scroll-affix="false" 
            relative-element-selector="#content">
            <div style="margin-top: 100px;">
              <h5>สินค้าที่เกี่ยวข้อง</h5>
              <div 
                v-if="content.acf.related_products" 
                class="container-fluid _pd-0px _mgt-16px">
                <div class="row">
                  <div 
                    v-for="(p, i) in content.acf.related_products" 
                    :key="i" 
                    class="col-6 col-md-3 col-lg-2 _mgbt-24px">
                    <Card
                      :key="i"
                      :title="p.name" 
                      :image="p.image"
                      :price="p.price_html"
                      :slug="p.slug"
                    />
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
  computed: {
    _enabled() {
      if (process.browser) {
        return window.innerWidth > 770
      }
    }
  }
}
</script>
