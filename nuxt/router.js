import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1d44cd5c = () => import('../pages/set-password.vue' /* webpackChunkName: "pages/set-password" */).then(m => m.default || m)
const _202fdbcf = () => import('../pages/register.vue' /* webpackChunkName: "pages/register" */).then(m => m.default || m)
const _ab5acc20 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _75aab2bb = () => import('../pages/KitchenSink.vue' /* webpackChunkName: "pages/KitchenSink" */).then(m => m.default || m)
const _4c2579f5 = () => import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */).then(m => m.default || m)
const _c0a41eda = () => import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */).then(m => m.default || m)
const _d07b4c26 = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _fc8150ee = () => import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */).then(m => m.default || m)
const _585e6c5c = () => import('../pages/profile/logout.vue' /* webpackChunkName: "pages/profile/logout" */).then(m => m.default || m)
const _1b148102 = () => import('../pages/profile/credit-card.vue' /* webpackChunkName: "pages/profile/credit-card" */).then(m => m.default || m)
const _101b8f4a = () => import('../pages/profile/refund.vue' /* webpackChunkName: "pages/profile/refund" */).then(m => m.default || m)
const _b78cd792 = () => import('../pages/profile/orders.vue' /* webpackChunkName: "pages/profile/orders" */).then(m => m.default || m)
const _06463adc = () => import('../pages/profile/address.vue' /* webpackChunkName: "pages/profile/address" */).then(m => m.default || m)
const _61c7a7f7 = () => import('../pages/checkout/_payment/index.vue' /* webpackChunkName: "pages/checkout/_payment/index" */).then(m => m.default || m)
const _efc8e218 = () => import('../pages/products/_catSlug/index.vue' /* webpackChunkName: "pages/products/_catSlug/index" */).then(m => m.default || m)
const _4c3d3c1f = () => import('../pages/checkout/_payment/_id.vue' /* webpackChunkName: "pages/checkout/_payment/_id" */).then(m => m.default || m)
const _63ca9254 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/set-password",
			component: _1d44cd5c,
			name: "set-password"
		},
		{
			path: "/register",
			component: _202fdbcf,
			name: "register"
		},
		{
			path: "/profile",
			component: _ab5acc20,
			name: "profile"
		},
		{
			path: "/KitchenSink",
			component: _75aab2bb,
			name: "KitchenSink"
		},
		{
			path: "/checkout",
			component: _4c2579f5,
			name: "checkout"
		},
		{
			path: "/products",
			component: _c0a41eda,
			name: "products"
		},
		{
			path: "/login",
			component: _d07b4c26,
			name: "login"
		},
		{
			path: "/forgot-password",
			component: _fc8150ee,
			name: "forgot-password"
		},
		{
			path: "/profile/logout",
			component: _585e6c5c,
			name: "profile-logout"
		},
		{
			path: "/profile/credit-card",
			component: _1b148102,
			name: "profile-credit-card"
		},
		{
			path: "/profile/refund",
			component: _101b8f4a,
			name: "profile-refund"
		},
		{
			path: "/profile/orders",
			component: _b78cd792,
			name: "profile-orders"
		},
		{
			path: "/profile/address",
			component: _06463adc,
			name: "profile-address"
		},
		{
			path: "/checkout/:payment",
			component: _61c7a7f7,
			name: "checkout-payment"
		},
		{
			path: "/products/:catSlug",
			component: _efc8e218,
			name: "products-catSlug"
		},
		{
			path: "/checkout/:payment/:id",
			component: _4c3d3c1f,
			name: "checkout-payment-id"
		},
		{
			path: "/",
			component: _63ca9254,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
