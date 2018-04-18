import JSCookie from 'js-cookie'
import Cookie from 'cookie'
import urls from '~/services/apiUrl'

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { app, req }) {
    let accessToken = null
    if (req && req.headers && req.headers.cookie) {
      let { token } = Cookie.parse(req.headers.cookie)
      accessToken = token
    }
    if (accessToken) {
      // console.log(accessToken)
      await commit('auth/SET_TOKEN', accessToken)
      await app.$axios.$get(urls.getUserMe)
        .then((x) => {
          commit('auth/SET_USER', x)
        })
        .catch((err) => {
          // Clear Cookie
          JSCookie.remove('token')
        })
    }
  }
}