export const state = () => ({
  isShowing: false,
  isUserMenuShowing: true,
  isMenuSticky: false,
  primaryMenu: []
})

export const mutations = {
  SET_MOBILE_MENU(state, bool) {
    state.isShowing = bool
  },
  SET_MENU_ITEMS(state, items) {
    state.primaryMenu = items
  },
  SET_USER_MENU(state, bool) {
    state.isUserMenuShowing = bool
  },
  SET_USER_STICKY(state, bool) {
    state.isMenuSticky = bool
  }
}
