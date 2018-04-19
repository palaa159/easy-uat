const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const config = require('../nuxt.config')

const app = express()

const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  nuxt.renderRoute('/')
    .then(result => {
      return res.send(result.html)
    })
    .catch(err => {
      res.send(err)
    })
}

app.use(nuxt.render)
app.get('*', handleRequest)

exports.ssrapp = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
