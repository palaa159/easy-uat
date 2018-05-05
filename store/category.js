import urls from '~/services/apiUrl'

export const actions = {
  async getProductsAndSubcats({}, catSlug) {
    const x = await this.$axios.$get(`${urls.getProductsAndSubcats}?catSlug=${encodeURI(catSlug)}`)
    return x
  }
}
