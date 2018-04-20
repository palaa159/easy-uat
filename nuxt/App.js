import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/styles/main.scss'


let layouts = {

  "_checkout": () => import('../layouts/checkout.vue'  /* webpackChunkName: "layouts/checkout" */).then(m => m.default || m),

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m),

  "_profile": () => import('../layouts/profile.vue'  /* webpackChunkName: "layouts/profile" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"nuxtcommerce","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"},{"hid":"description","name":"description","content":"The Best Ecommerce Platform out there!"},{"hid":"fbapp","property":"fb:app_id","content":"1479784165441633"},{"hid":"og:url","property":"og:url","content":"Nuxtcommerce.co"},{"hid":"og:site_name","property":"og:site_name","content":"Nuxtcommerce.co"},{"hid":"og:locale","property":"og:locale","content":"th_TH"},{"hid":"og:title","property":"og:title","content":"ตลาดไท – ตลาดกลางค้าส่งสินค้าเกษตรครบวงจร ใหญ่ที่สุดในอาเซียน"},{"hid":"og:description","name":"og:description","content":"ตลาดกลางค้าส่งสินค้าเกษตรครบวงจร ใหญ่ที่สุดในอาเซียน"},{"hid":"og:image","property":"og:image","content":"\u002Fimages\u002Fimage-placeholder.jpg"},{"hid":"theme-color","name":"theme-color","content":"#00A550"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"nuxtcommerce"},{"hid":"author","name":"author","content":"Apon Palanuwech"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Kanit:400,500,600&amp;subset=thai"},{"rel":"manifest","href":"\u002F\u002Fmanifest.78d0e489.json"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

