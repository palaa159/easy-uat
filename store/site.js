import pkg from '~/package'
import urls from '~/services/apiUrl'

export const state = () => ({
  title: `– ${pkg.description}`,
  omisePublicKey: pkg.omisePublicKey,
  termCondition: [],
  privacyPolicy: [],
  returnPolicy: [],
  countryCodes: {}
})

export const actions = {
  async getSiteInit({
    commit,
    rootState
  }) {
    const {
      product_categories,
      content_categories,
      country_codes
    } = await this.$axios.$get(urls.getSiteInit)
    commit('product/SET_CATEGORIES', product_categories, {
      root: true
    })
    commit('SET_CC', country_codes)
  }
}

export const mutations = {
  SET_CC(state, cc) {
    state.countryCodes = cc
  }
}
