import JSCookie from 'js-cookie'
import Cookie from 'cookie'
import urls from '~/services/apiUrl'

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { app, req }) {
    let accessToken = null
    if (req && req.headers && req.headers.cookie) {
      let { __session } = Cookie.parse(req.headers.cookie)
      console.log(__session)
      if (__session) {
        accessToken = JSON.parse(__session)
        accessToken = accessToken.token
      }
    }
    if (accessToken) {
      commit('auth/SET_TOKEN', accessToken)
      await app.$axios.$get(urls.getUserMe, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then((user) => {
          commit('auth/SET_USER', user)
        })
        .catch((err) => {
          // Clear Cookie
          console.log(err)
          JSCookie.remove('__session')
        })
    }
  }
}