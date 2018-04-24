import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal/dist/ssr.index'
import Transitions from 'vue2-transitions'
import moment from 'moment'
require('moment/locale/th')
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands'
// import { faSpinner, faSearch, faShoppingCart, faShoppingBag, faTimes, faHome, faUserCircle, faChevronRight, faLongArrowAltRight, faLock } from '@fortawesome/fontawesome-pro-solid'
// import { faFrown, faMinus, faPlus } from '@fortawesome/fontawesome-pro-regular'
import faSpinner from '@fortawesome/fontawesome-pro-solid/faSpinner'
import faSearch from '@fortawesome/fontawesome-pro-solid/faSearch'
import faShoppingCart from '@fortawesome/fontawesome-pro-solid/faShoppingCart'
import faShoppingBag from '@fortawesome/fontawesome-pro-solid/faShoppingBag'
import faTimes from '@fortawesome/fontawesome-pro-solid/faTimes'
import faHome from '@fortawesome/fontawesome-pro-solid/faHome'
import faUserCircle from '@fortawesome/fontawesome-pro-solid/faUserCircle'
import faChevronRight from '@fortawesome/fontawesome-pro-solid/faChevronRight'
import faLongArrowAltRight from '@fortawesome/fontawesome-pro-solid/faLongArrowAltRight'
import faLock from '@fortawesome/fontawesome-pro-solid/faLock'
import faFrown from '@fortawesome/fontawesome-pro-regular/faFrown'
import faMinus from '@fortawesome/fontawesome-pro-regular/faMinus'
import faPlus from '@fortawesome/fontawesome-pro-regular/faPlus'
import * as Auth from '~/services/auth'

Vue.use(VueScrollTo)
Vue.use(VeeValidate)
// VueLazyLoad
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/images/error.png',
  loading: '/images/loading.gif',
  attempt: 1
})
Vue.use(require('vue-moment'), {
  moment
})
Vue.use(VModal)
Vue.use(Transitions)

fontawesome.library.add(faFrown, faMinus, faPlus, faSpinner, faSearch, faShoppingCart, faShoppingBag, faTimes, faHome, faUserCircle, faChevronRight, faLongArrowAltRight)
Vue.component('fa-icon', FontAwesomeIcon)
// Init firebase
Auth.initFirebase()