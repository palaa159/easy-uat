const functions = require('firebase-functions')
const admin = require('firebase-admin')
try {admin.initializeApp(functions.config().firebase)} catch(e) {e} // You do that because the admin SDK can only be initialized once.
const { Nuxt } = require('nuxtjs-node6')
const express = require('express')
// const config = require('../nuxt.config')

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
    host: 'cms.maplelife.co.th',
    // prefix: '/wp-json/api/v1', moved to apiUrl.js
  },
}
const nuxt = new Nuxt(config)

function handleAppRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=6000, s-maxage=12000')
  return nuxt.renderRoute('/')
    .then(result => {
      return res.send(result.html)
    }).catch(err => {
      res.send(err)
    })
}

app.use(nuxt.render)
app.get('*', handleAppRequest)

exports = module.exports = functions.https.onRequest(app)