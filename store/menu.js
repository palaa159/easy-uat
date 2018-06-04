const primaryMenu = [{
  title: 'หน้าแรก',
  path: '/'
}, {
  title: 'MakerStore',
  path: '/shop'
}, {
  title: 'เวิร์คช็อป',
  path: '/workshop'
}, {
  title: 'บทความ',
  path: '/content'
}, {
  title: 'แจ้งชำระเงิน',
  path: '/profile'
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
