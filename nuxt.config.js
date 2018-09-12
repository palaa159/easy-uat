const pkg = require('./package')
const axios = require('axios')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'fbapp',
        property: 'fb:app_id',
        content: pkg.fbAppId
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: pkg.url
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'th_TH'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: pkg.title
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '200'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '200'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        // content: 'https://makerstation.in.th/images/og-logo-200x200.jpg'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#2B2B2B'
      }
    ],
    script: [{
        src: 'https://unpkg.com/jspdf@latest/dist/jspdf.min.js',
        body: true
      },
      // {
      //   src: '/js/contactWidget.js',
      //   body: true
      // }
      {
        src: 'https://www.gstatic.com/firebasejs/5.4.1/firebase.js',
        body: true
      }
    ],
    link: []
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [{
    src: 'assets/styles/main.scss',
    lang: 'scss'
  }],
  router: {
    middleware: ['router'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/ssr.js',
    '~/plugins/axios.js',
    {
      src: '~/plugins/no-ssr.js',
      ssr: false
    }
  ],
  render: {
    resourceHints: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    [
      'nuxt-rfg-icon', {
        masterPicture: 'static/images/favicon.png'
      }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    '@nuxtjs/component-cache'
  ],
  /*
   ** Axios module configuration
   */
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: pkg.url,
  //   cacheTime: 60 * 60 * 24, // hour,
  //   gzip: true,
  //   generate: true,
  //   exclude: [
  //     '/profile',
  //     '/profile/**',
  //     '/store/checkout',
  //     '/store/checkout/**',
  //   ],
  //   routes() {
  //     return axios.get('https://cms.makerstation.in.th/wp-json/api/v2/product?per_page=300')
  //       .then(res => res.data.map(product => `/store/product/${product.slug}`))
  //   }
  // },
  toast: {
    position: 'top-right'
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: true,
    debug: false,
    https: true,
    port: 443,
    host: pkg.apiUrl,
    // prefix: '/wp-json/api/v1', moved to apiUrl.js
  },

  /*
   ** Build configuration
   */
  buildDir: 'nuxt',
  build: {
    publicPath: '/',
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['en', 'th'],
      })
    ],
    babel: {
      presets: [
        [
          'env', {
            'targets': {
              'chrome': 52,
              'browsers': ['safari 7', 'ie 11']
            }
          }
        ], 'stage-0', 'stage-1', 'stage-2', 'stage-3'
      ],
      plugins: [
        'transform-runtime',
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!ctx.isDev) {
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
