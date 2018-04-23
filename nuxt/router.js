import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _54e05ee9 = () => import('../pages/set-password.vue' /* webpackChunkName: "pages/set-password" */).then(m => m.default || m)
const _93a9f634 = () => import('../pages/register.vue' /* webpackChunkName: "pages/register" */).then(m => m.default || m)
const _91aef18e = () => import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */).then(m => m.default || m)
const _27054378 = () => import('../pages/KitchenSink.vue' /* webpackChunkName: "pages/KitchenSink" */).then(m => m.default || m)
const _4be59468 = () => import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */).then(m => m.default || m)
const _2d95ac6a = () => import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */).then(m => m.default || m)
const _1ebaa036 = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _9e61d2dc = () => import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */).then(m => m.default || m)
const _3373af9a = () => import('../pages/profile/logout.vue' /* webpackChunkName: "pages/profile/logout" */).then(m => m.default || m)
const _a2a8d8ea = () => import('../pages/profile/credit-card.vue' /* webpackChunkName: "pages/profile/credit-card" */).then(m => m.default || m)
const _c3f969be = () => import('../pages/profile/refund.vue' /* webpackChunkName: "pages/profile/refund" */).then(m => m.default || m)
const _3221500e = () => import('../pages/profile/orders.vue' /* webpackChunkName: "pages/profile/orders" */).then(m => m.default || m)
const _2beca19b = () => import('../pages/profile/address.vue' /* webpackChunkName: "pages/profile/address" */).then(m => m.default || m)
const _57104e00 = () => import('../pages/checkout/_payment/index.vue' /* webpackChunkName: "pages/checkout/_payment/index" */).then(m => m.default || m)
const _2bdf0b22 = () => import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */).then(m => m.default || m)
const _5659d068 = () => import('../pages/checkout/_payment/_id.vue' /* webpackChunkName: "pages/checkout/_payment/_id" */).then(m => m.default || m)
const _5512fd1f = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _54e05ee9,
			name: "set-password"
		},
		{
			path: "/register",
			component: _93a9f634,
			name: "register"
		},
		{
			path: "/profile",
			component: _91aef18e,
			name: "profile"
		},
		{
			path: "/KitchenSink",
			component: _27054378,
			name: "KitchenSink"
		},
		{
			path: "/checkout",
			component: _4be59468,
			name: "checkout"
		},
		{
			path: "/products",
			component: _2d95ac6a,
			name: "products"
		},
		{
			path: "/login",
			component: _1ebaa036,
			name: "login"
		},
		{
			path: "/forgot-password",
			component: _9e61d2dc,
			name: "forgot-password"
		},
		{
			path: "/profile/logout",
			component: _3373af9a,
			name: "profile-logout"
		},
		{
			path: "/profile/credit-card",
			component: _a2a8d8ea,
			name: "profile-credit-card"
		},
		{
			path: "/profile/refund",
			component: _c3f969be,
			name: "profile-refund"
		},
		{
			path: "/profile/orders",
			component: _3221500e,
			name: "profile-orders"
		},
		{
			path: "/profile/address",
			component: _2beca19b,
			name: "profile-address"
		},
		{
			path: "/checkout/:payment",
			component: _57104e00,
			name: "checkout-payment"
		},
		{
			path: "/products/:slug",
			component: _2bdf0b22,
			name: "products-slug"
		},
		{
			path: "/checkout/:payment/:id",
			component: _5659d068,
			name: "checkout-payment-id"
		},
		{
			path: "/",
			component: _5512fd1f,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
