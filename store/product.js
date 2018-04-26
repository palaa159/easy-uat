import urls from '~/services/apiUrl'

export const actions = {
  async getProductByAttr ({}, slug) {
    const prod = await this.$axios.$get(`${urls.getProductByAttr}/${slug}`)
    return prod
  },
  async getFeaturedProducts () {
    const prod = await this.$axios.$get(`${urls.getProductByAttr}?featured=true`)
    return prod
  },
  async getCategories ({}, { exclude = 0 }) {
    const cats = await this.$axios.$get(`${urls.getCategories}?exclude=${exclude}`)
    return cats
  },
  async getProductsByCatSlug ({}, catSlug) {
    const products = await this.$axios.$get(`${urls.getProductsByCatSlug}?catSlug=${encodeURI(catSlug)}`)
    return products
  }
}