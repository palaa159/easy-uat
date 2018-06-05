import JSCookie from 'js-cookie'
import urls from '~/services/apiUrl'
import * as Auth from '~/services/auth'

export const state = () => ({
  user: null,
  token: null,
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%-_*#?&])[A-Za-z\d$@$!%-_*#?&]{8,}$/
})

export const mutations = {
  SET_TOKEN(state, token) {
    this.$axios.setToken(token, 'Bearer')
    state.token = token
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_CUSTOMER(state, customer) {
    state.customer = customer
  }
}

export const actions = {
  async getUserMe({
    commit
  }) {
    const promises = [
      this.$axios.$get(urls.getUserMe).catch((err) => {
        // Clear Cookie
        console.log(err)
        JSCookie.remove('__session')
      }),
      this.$axios.$get(urls.customer).catch((err) => {
        // Clear Cookie
        console.log(err)
        JSCookie.remove('__session')
      })
    ]
    const [user, customer] = await Promise.all(promises)
    commit('SET_USER', user)
    commit('SET_CUSTOMER', customer)
  },
  async register({
    commit
  }, {
    email,
    password,
    firstName,
    lastName
  }) {
    const res = await this.$axios.$post(urls.emailRegister, {
      email,
      password,
      firstName,
      lastName
    })
    return res
  },
  async forgotSetPassword({}, {
    key,
    login,
    password
  }) {
    const isChanged = await this.$axios.$post(urls.forgotSetPassword, {
      key,
      login,
      password
    })
    return isChanged
  },
  async facebookSignUp({
    dispatch
  }) {
    const resToken = await Auth.facebookSignIn()
    // console.log(resToken)
    if (resToken.credential && resToken.user.email) {
      const accessToken = resToken.credential.accessToken
      const resLogin = await this.$axios.$post(urls.fbLogin, {
        access_token: accessToken,
        email: resToken.user.email
      })
      let userData = {
        email: resToken.user.email,
        password: resLogin
      }
      return userData
    } else {
      return false
      // this.errorMessage = 'ไม่สามารถล็อกได้เนื่องจาก Facebook ของคุณไม่มีอีเมล กรุณาใช้วิธีการสมัครผ่านอีเมลแทน'
    }
  },
  async login({
    state,
    dispatch,
    commit
  }, {
    email,
    password
  }) {
    // load axios
    const {
      token
    } = await this.$axios.$post(urls.getToken, {
      username: email,
      password
    })
    if (token) {
      JSCookie.set('__session', {
        token
      })
    }
    return token
  },
  async logout({
    dispatch,
    commit
  }) {
    JSCookie.remove('__session')
    await commit('SET_TOKEN', null)
    return window.location.href = '/'
  }
}
