import urls from '~/services/apiUrl'

export const actions = {
  async getProductBySlug({}, {
    slug,
    variations = false
  }) {
    const prod = await this.$axios.$get(`${urls.getProduct}/${slug}`)
    return prod || {}
  },
  async getFeaturedProducts({}) {
    const prod = await this.$axios.$get(`${urls.getProduct}?featured=true`)
    return prod
  },
  async getCategories({}, {
    exclude = '0'
  }) {
    const cats = await this.$axios.$get(`${urls.getCategories}?exclude=${exclude}`)
    return cats
  },
  async getProductsByCatSlug({}, catSlug) {
    const products = await this.$axios.$get(`${urls.getProductsByCatSlug}?catSlug=${encodeURI(catSlug)}`)
    return products
  },
  async getShopCategories({}) {
    const cats = await this.$axios.$get(`${urls.getShopCategories}`)
    return cats
  },
  async getProductVariationsById({}, {
    id
  }) {
    const variations = await this.$axios.$get(`${urls.getProductVariations}?id=${id}`)
    return variations
  }
}
