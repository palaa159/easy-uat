const functions = require('firebase-functions')
const admin = require('firebase-admin')
try {
  admin.initializeApp(functions.config().firebase)
} catch (e) {
  e
} // You do that because the admin SDK can only be initialized once.
const {
  Nuxt
} = require('nuxt-edge')
const express = require('express')
const pkg = require('./package')

const app = express()
const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/'
  },
  render: {
    resourceHints: false
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: true,
    debug: true,
    https: true,
    port: 443,
    host: 'cms.makerstation.in.th',
    // prefix: '/wp-json/api/v1', moved to apiUrl.js
  },
}
const nuxt = new Nuxt(config)

const handleRequest = (req, res) => {
  if (req.hostname.indexOf('cms') === -1) {
    res.set('Cache-Control', 'public, max-age=43200, immutable')
  }
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, (promise) => {
      promise.then(resolve).catch(reject)
    })
  })
}

app.use(handleRequest)

exports = module.exports = functions.https.onRequest(app)
