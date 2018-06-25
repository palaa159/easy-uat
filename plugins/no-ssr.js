import Vue from 'vue'
import VueFloatLabel from 'vue-float-label'
import VueAgile from 'vue-agile'
// import VueThaiAddressInput from '~/modules/vue-thai-address-input'
import VueCard from 'vue-credit-card'
import VueAffix from 'vue-affix'
import lineClamp from 'vue-line-clamp'

Vue.use(VueAffix)
Vue.use(VueFloatLabel)
Vue.use(VueAgile)
Vue.use(lineClamp)
// Vue.use(VueThaiAddressInput)
Vue.component('Card', VueCard)
