import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

function initFirebase () {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDqJ-2F8n0jCaFTVe5VyHsymKHTSJHVgz4",
    authDomain: "maplelife-co-th.firebaseapp.com",
    databaseURL: "https://maplelife-co-th.firebaseio.com",
    projectId: "maplelife-co-th",
    storageBucket: "maplelife-co-th.appspot.com",
    messagingSenderId: "293257228830"
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