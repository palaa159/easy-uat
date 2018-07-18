<template>
  <div class="container _mgt-24px">
    <div class="row">
      <div 
        v-for="(item, i) in contents" 
        :key="i"
        class="col-12 col-md-3 _mgv-12px">
        <nuxt-link 
          :to="`/blog/${item.post_name}`" 
        >          
          <ContentCard 
            :data="item" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from '~/components/content/ContentCard'
export default {
  layout: 'blog',
  components: {
    ContentCard
  },
  async asyncData({ store }) {
    const contents = await store.dispatch('content/getContent', {})
    return {contents}
  },
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `Blog – ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `Blog` },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${siteTitle}`
        }
      ]
    }
  },
}
</script>
