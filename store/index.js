import JSCookie from 'js-cookie'
import Cookie from 'cookie'
import urls from '~/services/apiUrl'

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { app, req }) {
    let accessToken = null
    if (req && req.headers && req.headers.cookie) {
      let { __session } = Cookie.parse(req.headers.cookie)
      // console.log(__session)
      if (__session) {
        accessToken = JSON.parse(__session)
        accessToken = accessToken.token
      }
    }
    if (accessToken) {
      commit('auth/SET_TOKEN', accessToken)
      const promises = [
        // User Me
        app.$axios.$get(urls.getUserMe).catch((err) => {
          // Clear Cookie
          console.log(err)
          JSCookie.remove('__session')
        }),
        // Cart
        app.$axios.$get(urls.getCartContent)
      ]
      const [ user, cart ] = await Promise.all(promises)
      commit('auth/SET_USER', user)
      commit('purchase/SET_CART_CONTENT', cart)
    }
  }
}