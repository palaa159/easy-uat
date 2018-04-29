import urls from '~/services/apiUrl'

export const actions = {
  async getSlideshow ({}, { slug }) {
    const slideshow = await this.$axios.$get(`${urls.getSlideshow}?slug=${slug}`)
    return slideshow && slideshow[0].acf.slide || []
  }
}