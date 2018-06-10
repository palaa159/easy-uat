import pkg from '~/package'
import urls from '~/services/apiUrl'
import _values from 'lodash/values'

export const state = () => ({
  title: `– ${pkg.description}`,
  omisePublicKey: pkg.omisePublicKey,
  termCondition: [],
  privacyPolicy: [],
  returnPolicy: [],
  countryCodes: {},
  bankTransfer: {
    name: 'Siam Commercial Bank',
    accountTitle: 'บริษัท',
    number: '408-648180-4'
  }
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
    commit('product/SET_CATEGORIES', _values(product_categories), {
      root: true
    })
    commit('SET_CC', country_codes)
    // Generate Menu Items
    const primaryMenu = [{
      title: 'MakerStore®',
      path: '/store',
      isSubMenuShowing: false,
      subMenu: _values(product_categories)
    }, {
      title: 'Workshops',
      path: '/workshop'
    }, {
      title: 'Learn',
      path: '/learn'
    }, {
      title: 'About',
      path: '/about'
    }]
    commit('menu/SET_MENU_ITEMS', primaryMenu, {
      root: true
    })
  }
}

export const mutations = {
  SET_CC(state, cc) {
    state.countryCodes = cc
  }
}
