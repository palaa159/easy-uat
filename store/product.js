import urls from '~/services/apiUrl'

export const actions = {
  async getProductBySlug ({}, slug) {
    const prod = await this.$axios.$get(`${urls.getProductBySlug}/${slug}`)
    return prod
  }
}