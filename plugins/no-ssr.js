import Vue from 'vue'
import VueFloatLabel from 'vue-float-label'
import VueAgile from 'vue-agile'
import VueCard from 'vue-credit-card'
import VueAffix from 'vue-affix'
import lineClamp from 'vue-line-clamp'

Vue.use(VueAffix)
Vue.use(VueFloatLabel)
Vue.use(VueAgile)
Vue.use(lineClamp)
Vue.component('Card', VueCard)
