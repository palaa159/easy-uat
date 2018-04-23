const pkg = require('./package')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'fbapp', property: 'fb:app_id', content: '1479784165441633' },
      { hid: 'og:url', property: 'og:url', content: pkg.url },
      { hid: 'og:site_name', property: 'og:site_name', content: pkg.url },
      { hid: 'og:locale', property: 'og:locale', content: 'th_TH' },
      { hid: 'og:title', property: 'og:title', content: 'ตลาดไท – ตลาดกลางค้าส่งสินค้าเกษตรครบวงจร ใหญ่ที่สุดในอาเซียน' },
      { hid: 'og:description', name: 'og:description', content: 'ตลาดกลางค้าส่งสินค้าเกษตรครบวงจร ใหญ่ที่สุดในอาเซียน' },
      { hid: 'og:image', property: 'og:image', content: '/images/image-placeholder.jpg' },
      { hid: 'theme-color', name: 'theme-color', content: '#00A550' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit:300,400,500,600&amp;subset=thai' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'assets/styles/main.scss', lang: 'scss' } 
  ],
  router: {
    middleware: ['router']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/ssr.js',
    '~/plugins/persistedstate.js',
    '~/plugins/axios.js',
    { src: '~/plugins/no-ssr.js', ssr: false }
  ],
  render: {
    resourceHints: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // ['@nuxtjs/google-analytics', {
    //   id: ''
    // }],
    // ['@nuxtjs/pwa', { icon: false }] // doesn't work in firebase functions
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: true,
    debug: false,
    https: true,
    port: 443,
    host: 'cms.maplelife.co.th',
    // prefix: '/wp-json/api/v1', moved to apiUrl.js
  },

  /*
  ** Build configuration
  */
  buildDir: 'nuxt',
  build: {
    // cache: true,
    // parallel: true,
    // analyze: true,
    vendors: [
      'axios', 'moment'
    ],
    publicPath: '/',
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['en', 'th'],
      })
    ],
    babel: {
      presets: [[
        "env", {
          "targets": {
            "chrome": 52,
            "browsers": ["safari 7", "ie 11"]
          }
        }
      ], 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
      plugins: [
        "transform-runtime",
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.dev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!ctx.dev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    }
  }
}
