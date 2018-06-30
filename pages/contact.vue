<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3 class="_mgv-24px _lh-100pct">ติดต่อ MakerStation</h3>
        <ContentFromWP :content="page.content.rendered" />
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
  async asyncData ({ store, params }) {
    const page = await store.dispatch('content/getPage', { slug: 'contact-us' })
    if (!page) {
      // return redirect('400')
    }
    // console.log(content)
    return { page }
  },
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `Contact ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `Contact` },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `Contact`
        }
      ]
    }
  },
}
</script>
