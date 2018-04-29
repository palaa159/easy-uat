import Vue from 'vue'
import VueFloatLabel from 'vue-float-label'
import VueAgile from 'vue-agile'
// import VueThaiAddressInput from '~/modules/vue-thai-address-input'
import VueCard from 'vue-credit-card'

Vue.use(VueFloatLabel)
Vue.use(VueAgile)
// Vue.use(VueThaiAddressInput)
Vue.component('Card', VueCard)