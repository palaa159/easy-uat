export default function ({
  isHMR,
  store,
  route,
  redirect
}) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  if (store.state.purchase.isCartShowing) store.commit('purchase/SET_CART_SHOW', false)
  if (store.state.menu.isShowing) store.commit('menu/SET_MOBILE_MENU', false)
  // If /profile
  if (route.path.indexOf('/profile') > -1) {
    if (store.state.auth.user === null) {
      return redirect('/login')
    }
  }
  // If checkout/payment
  store.commit('menu/SET_USER_MENU', true)
  if (route.path.indexOf('/payment') > -1) {
    // Remove cart menu
    // store.commit('menu/SET_USER_MENU', false)
    if (store.state.auth.user === null) {
      return redirect('/login?redirect=/checkout/payment')
    }
  }
  if (process.browser) {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 2500)
  }
}
