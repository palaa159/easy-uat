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
import faYoutubeSquare from '@fortawesome/fontawesome-free-brands/faYoutubeSquare'
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare'
import faSpinner from '@fortawesome/fontawesome-pro-solid/faSpinner'
import faSearch from '@fortawesome/fontawesome-pro-solid/faSearch'
import faShoppingCart from '@fortawesome/fontawesome-pro-solid/faShoppingCart'
import faShoppingBag from '@fortawesome/fontawesome-pro-solid/faShoppingBag'
import faTimes from '@fortawesome/fontawesome-pro-solid/faTimes'
import faHome from '@fortawesome/fontawesome-pro-solid/faHome'
import faUser from '@fortawesome/fontawesome-pro-light/faUser'
import faUserCircle from '@fortawesome/fontawesome-pro-solid/faUserCircle'
import faChevronRight from '@fortawesome/fontawesome-pro-solid/faChevronRight'
import faLongArrowAltRight from '@fortawesome/fontawesome-pro-solid/faLongArrowAltRight'
import faLongArrowAltLeft from '@fortawesome/fontawesome-pro-solid/faLongArrowAltLeft'
import faClipboardList from '@fortawesome/fontawesome-pro-light/faClipboardList'
import faTruck from '@fortawesome/fontawesome-pro-light/faTruck'
import faFileAlt from '@fortawesome/fontawesome-pro-light/faFileAlt'
import faCreditCard from '@fortawesome/fontawesome-pro-light/faCreditCard'
import faUndoAlt from '@fortawesome/fontawesome-pro-light/faUndoAlt'
import faSignOutAlt from '@fortawesome/fontawesome-pro-light/faSignOutAlt'
import faLock from '@fortawesome/fontawesome-pro-solid/faLock'
import faCheck from '@fortawesome/fontawesome-pro-solid/faCheck'
import faFrown from '@fortawesome/fontawesome-pro-regular/faFrown'
import faMinus from '@fortawesome/fontawesome-pro-regular/faMinus'
import faPlus from '@fortawesome/fontawesome-pro-regular/faPlus'
import faPaperPlane from '@fortawesome/fontawesome-pro-light/faPaperPlane'
import faRepeat from '@fortawesome/fontawesome-pro-light/faRepeat'

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

fontawesome.config = {
  autoAddCss: false
}

fontawesome.library.add(faFacebookSquare, faFrown, faMinus, faPlus, faSpinner, faSearch, faShoppingCart, faShoppingBag, faTimes, faHome, faUser, faUserCircle, faChevronRight, faLongArrowAltRight, faLongArrowAltLeft, faFileAlt, faClipboardList, faTruck, faCreditCard, faUndoAlt, faSignOutAlt, faLock, faCheck, faPaperPlane, faRepeat, faYoutubeSquare)

Vue.component('fa-icon', FontAwesomeIcon)
// Init firebase

// Filters
Vue.filter('currency', val => {
  val = parseFloat(val).toLocaleString()
  return val + ' ฿'
  // parseFloat(val) 
})
