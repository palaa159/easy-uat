import urls from '~/services/apiUrl'

export const actions = {
  async getSlideshow({}, {
    slug
  }) {
    const slideshow = await this.$axios.$get(`${urls.getSlideshow}?slug=${slug}`)
    return slideshow && slideshow[0].acf.slide || []
  },
  // async getFeaturedContent() {
  //   const slideshow = await this.$axios.$get(`${urls.getFeaturedContent}`)
  //   return slideshow.posts || []
  // },
  async getContent({}, {
    slug,
    featured = false
  }) {
    let x
    if (slug) x = `?slug=${slug}`
    if (featured) x = `?featured=${featured}`
    const content = await this.$axios.$get(`${urls.getContent}${x}`)
    return content && content[0] || null
  }
}
