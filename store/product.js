import urls from '~/services/apiUrl'

export const actions = {
  async getProductByAttr ({}, slug) {
    const prod = await this.$axios.$get(`${urls.getProductByAttr}/${slug}`)
    return prod
  },
  async getFeaturedProducts () {
    const prod = await this.$axios.$get(`${urls.getProductByAttr}?featured=true`)
    return prod
  }
}