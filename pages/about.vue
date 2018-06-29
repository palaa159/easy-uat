<template>
  <div class="container">
    <div class="row">
      <div class="col-12 _mgt-24px">
        <!-- <h3 class="_mgv-24px _lh-100pct">เกี่ยวกับ MakerStation</h3> -->
        <ContentFromWP :content="page.content.rendered" />
      </div>
    </div>
    <!-- Team Members -->
    <div class="row">
      <div class="col-12">
        <h3>Team</h3>
      </div>
    </div>
    <div 
      v-for="(m, i) in page.acf.team_members" 
      :key="i" 
      class="row _pdv-24px">
      <div class="col-12 col-md-4">
        <!-- Image -->
        <div 
          class="_w-100pct profile-image" 
          v-html="m.user_avatar"/>
      </div>
      <div class="col-12 col-md-8">
        <!-- Name -->
        <div class="_pdv-12px">
          <h5>{{ m.display_name }}</h5>
          <a :href="`mailto:${m.user_email}`">{{ m.user_email }}</a>
          <p 
            class="_mgt-12px" 
            v-html="m.user_description"/>
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
  layout: 'about',
  async asyncData ({ store, params }) {
    const page = await store.dispatch('content/getPage', { slug: 'about-us' })
    if (!page) {
      // return redirect('400')
    }
    // console.log(content)
    return { page }
  },
    head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `About us ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `About us` },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `About us`
        }
      ]
    }
  },
}
</script>