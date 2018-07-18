import pkg from '~/package'
import urls from '~/services/apiUrl'

export const state = () => ({
  title: `${pkg.title} ${pkg.description}`,
  omisePublicKey: pkg.omisePublicKey,
  termCondition: [],
  privacyPolicy: [],
  returnPolicy: [],
  countryCodes: {},
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
    commit('product/SET_CATEGORIES', Object.values(product_categories), {
      root: true
    })
    commit('SET_CC', country_codes)
    // Generate Menu Items
    const primaryMenu = [{
      title: 'MakerStore®',
      path: '/store',
      isSubMenuShowing: false,
      subMenu: Object.values(product_categories)
    }, {
      title: 'Workshops',
      path: '/workshop'
    }, {
      title: 'Blog',
      path: '/blog'
    }, {
      title: 'About',
      path: '/about'
    }, {
      title: 'Contact',
      path: '/contact'
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
