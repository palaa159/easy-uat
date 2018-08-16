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

const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/'
  },
  render: {
    resourceHints: false
  }
}
const nuxt = new Nuxt(config)

const handleRequest = (req, res) => {
  // Cache 12 hours if not cms calling
  // res.set('Cache-Control', 'public, max-age=3600')
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, (promise) => {
      promise.then(resolve).catch(reject)
    })
  })
}

exports = module.exports = functions.https.onRequest(handleRequest)
