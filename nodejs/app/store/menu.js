export const state = () => ({
  isShowing: false,
  isUserMenuShowing: true
})

export const mutations = {
  SET_MOBILE_MENU (state, bool) {
    state.isShowing = bool
  },
  SET_USER_MENU (state, bool) {
    state.isUserMenuShowing = bool
  }
}