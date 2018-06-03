<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-9">
        <div class="_mgt-16px">
          <h3 v-html="content.title.rendered"/>
          <p>{{ content.date | moment('วันที่ DD MMMM YYYY HH:mm') }}</p>
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
        <div class="_mgt-16px">
          <h5>สินค้าที่เกี่ยวข้อง</h5>
          {{ content.acf.related_products }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentFromWP from '~/components/content/ContentFromWP'
export default {
  components: {
    ContentFromWP
  },
  async asyncData({ store, params, redirect }) {
    const slug = params.slug
    const content = await store.dispatch('content/getContent', { slug })
    if (!content) {
      // return redirect('400')
    }
    // console.log(content)
    return { content }
  }
}
</script>
