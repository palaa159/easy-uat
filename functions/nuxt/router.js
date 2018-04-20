import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _faf19f2c = () => import('../pages/set-password.vue' /* webpackChunkName: "pages/set-password" */).then(m => m.default || m)
const _9d9e8232 = () => import('../pages/register.vue' /* webpackChunkName: "pages/register" */).then(m => m.default || m)
const _3e5be5d8 = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _390e86ba = () => import('../pages/kitchensink.vue' /* webpackChunkName: "pages/kitchensink" */).then(m => m.default || m)
const _3945ab0d = () => import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */).then(m => m.default || m)
const _e663bcaa = () => import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */).then(m => m.default || m)
const _4b2a0dd5 = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _38a54971 = () => import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */).then(m => m.default || m)
const _457e9d74 = () => import('../pages/profile/logout.vue' /* webpackChunkName: "pages/profile/logout" */).then(m => m.default || m)
const _285f3eea = () => import('../pages/profile/credit-card.vue' /* webpackChunkName: "pages/profile/credit-card" */).then(m => m.default || m)
const _05887f3c = () => import('../pages/profile/refund.vue' /* webpackChunkName: "pages/profile/refund" */).then(m => m.default || m)
const _dd4c7562 = () => import('../pages/profile/orders.vue' /* webpackChunkName: "pages/profile/orders" */).then(m => m.default || m)
const _987a570c = () => import('../pages/profile/address.vue' /* webpackChunkName: "pages/profile/address" */).then(m => m.default || m)
const _2e3131df = () => import('../pages/checkout/_payment/index.vue' /* webpackChunkName: "pages/checkout/_payment/index" */).then(m => m.default || m)
const _e9d0ff3a = () => import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */).then(m => m.default || m)
const _31d02007 = () => import('../pages/checkout/_payment/_id.vue' /* webpackChunkName: "pages/checkout/_payment/_id" */).then(m => m.default || m)
const _fcfb2a84 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _faf19f2c,
			name: "set-password"
		},
		{
			path: "/register",
			component: _9d9e8232,
			name: "register"
		},
		{
			path: "/profile",
			component: _3e5be5d8,
			name: "profile"
		},
		{
			path: "/kitchensink",
			component: _390e86ba,
			name: "kitchensink"
		},
		{
			path: "/checkout",
			component: _3945ab0d,
			name: "checkout"
		},
		{
			path: "/products",
			component: _e663bcaa,
			name: "products"
		},
		{
			path: "/login",
			component: _4b2a0dd5,
			name: "login"
		},
		{
			path: "/forgot-password",
			component: _38a54971,
			name: "forgot-password"
		},
		{
			path: "/profile/logout",
			component: _457e9d74,
			name: "profile-logout"
		},
		{
			path: "/profile/credit-card",
			component: _285f3eea,
			name: "profile-credit-card"
		},
		{
			path: "/profile/refund",
			component: _05887f3c,
			name: "profile-refund"
		},
		{
			path: "/profile/orders",
			component: _dd4c7562,
			name: "profile-orders"
		},
		{
			path: "/profile/address",
			component: _987a570c,
			name: "profile-address"
		},
		{
			path: "/checkout/:payment",
			component: _2e3131df,
			name: "checkout-payment"
		},
		{
			path: "/products/:slug",
			component: _e9d0ff3a,
			name: "products-slug"
		},
		{
			path: "/checkout/:payment/:id",
			component: _31d02007,
			name: "checkout-payment-id"
		},
		{
			path: "/",
			component: _fcfb2a84,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
