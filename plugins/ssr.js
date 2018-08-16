import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal/dist/ssr.index'
import Transitions from 'vue2-transitions'
import moment from 'moment'
require('moment/locale/th')

Vue.use(VueScrollTo, {
  offset: -50
})
Vue.use(VeeValidate)
// VueLazyLoad
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/images/error.png',
  loading: '/images/loading.gif',
  attempt: 0
})
Vue.use(require('vue-moment'), {
  moment
})
Vue.use(VModal)
Vue.use(Transitions)

// Init firebase

// Filters
Vue.filter('currency', val => {
  val = parseFloat(val).toLocaleString()
  return val + ' ฿'
  // parseFloat(val) 
})
