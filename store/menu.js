const primaryMenu = [{
  title: 'MakerStore®',
  path: '/store'
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

export const state = () => ({
  isShowing: false,
  isUserMenuShowing: true,
  isUserSticky: false,
  primaryMenu
})

export const mutations = {
  SET_MOBILE_MENU(state, bool) {
    state.isShowing = bool
  },
  SET_USER_MENU(state, bool) {
    state.isUserMenuShowing = bool
  },
  SET_USER_STICKY(state, bool) {
    state.isUserSticky = bool
  }
}
