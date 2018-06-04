import pkg from '~/package'
import urls from '~/services/apiUrl'

export const state = () => ({
  title: `– ${pkg.description}`,
  omisePublicKey: pkg.omisePublicKey,
  termCondition: [],
  privacyPolicy: [],
  returnPolicy: [],
})

export const actions = {
  async getSiteInit({
    commit,
    rootState
  }) {
    const {
      product_categories,
      content_categories
    } = await this.$axios.$get(urls.getSiteInit)
    commit('product/SET_CATEGORIES', product_categories, {
      root: true
    })
  }
}
