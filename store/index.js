import Cookie from 'cookie'

export const actions = {
  async nuxtServerInit({
    commit,
    dispatch
  }, {
    req
  }) {
    let accessToken = null
    if (req && req.headers && req.headers.cookie) {
      let {
        __session
      } = Cookie.parse(req.headers.cookie)
      // console.log(__session)
      if (__session) {
        accessToken = (JSON.parse(__session)).token
      }
    }
    if (accessToken) {
      commit('auth/SET_TOKEN', accessToken)
      await dispatch('auth/getUserMe')
    }
    await dispatch('auth/getCustomer')
    await dispatch('site/getSiteInit')
  }
}
