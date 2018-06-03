const pkg = require('./package')
// const axios = require('axios')
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
        hid: 'og:url',
        property: 'og:url',
        content: pkg.url
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
        content: '135'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '135'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://makerstation.in.th/images/logo.png/og-image.jpg'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#2B2B2B'
      }
    ],
    link: [{
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Kanit:300,400,500,600&amp;subset=thai'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#000'
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
    '~/plugins/persistedstate.js',
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
    '@nuxtjs/axios', ['@nuxtjs/google-analytics', {
      id: pkg.gaId
    }],
    // [
    //   '@nuxtjs/sitemap'
    // ],
    ['nuxt-robots-module', {
      /* module options */
      UserAgent: '*',
      Disallow: '/profile',
    }],
    // ['@nuxtjs/pwa', { icon: false }] // doesn't work in firebase functions
  ],
  // sitemap: {
  //   // gzip: true,
  //   exclude: [
  //     '/profile',
  //     '/profile/**'
  //   ],
  //   // routes() {
  //   //   return axios.get(`https://${pkg.apiUrl}/wp-json/api/v1/wc/product`).then(res => res.data.map(product => `/shop/product/${product.slug}`))
  //   // }
  // },
  /*
   ** Axios module configuration
   */
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
    // cache: true,
    // parallel: true,
    // analyze: true,
    vendors: [
      'axios', 'moment', 'firebase/app', 'firebase/auth', 'firebase/storage', 'debounce'
    ],
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
