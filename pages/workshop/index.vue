<template>
  <div class="container">
    <div 
      v-if="workshops.length" 
      class="row">
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
          :slug="wk.slug"
        />
      </div>
    </div>
    <!--  -->
    <div v-else>
      <h4 class="_tal-ct">พบกับ Workshop ดีๆได้ที่นี่ เร็วๆนี้...</h4>
    </div>
  </div>
</template>

<script>
import WorkshopCard from '~/components/workshop/WorkshopCard'
export default {
  async asyncData({ store }) {
    const workshops = await store.dispatch('workshop/getWorkshop', {})
    return {workshops}
  },
  components: {
    WorkshopCard
  },
  layout: 'workshop',
  head() {
    const siteTitle = this.$store.state.site.title
    return {
      title: `Workshops & Events ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `Workshops & Events` },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `Workshops & Events`
        }
      ]
    }
  },
}
</script>
