import JSCookie from 'js-cookie'
import urls from '~/services/apiUrl'

export const state = () => ({
  user: null,
  token: null,
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%-_*#?&])[A-Za-z\d$@$!%-_*#?&]{8,}$/
})

export const mutations = {
  SET_TOKEN (state, token) {
    this.$axios.setToken(token, 'Bearer')
    JSCookie.set('token', token)
    state.token = token
  },
  SET_USER (state, user) {
    state.user = user
  }
}

export const actions = {
  async register ({ commit }, { email, password, firstName, lastName }) {
    const res = await this.$axios.$post(urls.emailRegister, {
      email,
      password,
      firstName,
      lastName
    })
    return res
  },
  async login ({ state, dispatch, commit }, { email, password }) {
    // load axios
    const res = await this.$axios.$post(urls.getToken, {
      username: email,
      password
    })
    // console.log(token)
    if (res.token) {
      await commit('SET_TOKEN', res.token)
    }
    return res
  },
  async logout ({ dispatch, commit }) {
    JSCookie.remove('token')
    await commit('SET_TOKEN', null)
    return window.location.href = '/'
  }
}