import Vue from 'vue'
import VueFloatLabel from 'vue-float-label'
import VueAgile from 'vue-agile'
import VueCard from 'vue-credit-card'
import VueAffix from 'vue-affix'
import lineClamp from 'vue-line-clamp'
import VueScrollReveal from 'vue-scroll-reveal'
import WebFont from 'webfontloader'

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '80px',
  mobile: false
})

Vue.use(VueAffix)
Vue.use(VueFloatLabel)
Vue.use(VueAgile)
Vue.use(lineClamp)
Vue.component('Card', VueCard)

WebFont.load({
  google: {
    families: ['Poppins', 'Kanit']
  }
})
