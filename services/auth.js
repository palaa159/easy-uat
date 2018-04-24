import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

function initFirebase () {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAi15SE_1oBKi9rc26qa5nhMAnkluu_OPU",
    authDomain: "nuxt-ecommerce.firebaseapp.com",
    databaseURL: "https://nuxt-ecommerce.firebaseio.com",
    projectId: "nuxt-ecommerce",
    storageBucket: "nuxt-ecommerce.appspot.com",
    messagingSenderId: "495870615405"
  }
  if (!firebase.apps.length) {
    return firebase.initializeApp(config)
  }
  return
}

function facebookSignIn () {
  let provider = new firebase.auth.FacebookAuthProvider()
  // provider.addScope('email')
  provider.setCustomParameters({
    'display': 'popup'
  })
  return firebase
    .auth()
    .signInWithPopup(provider)
}

export {
  initFirebase,
  facebookSignIn
}