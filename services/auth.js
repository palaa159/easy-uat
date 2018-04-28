import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

function initFirebase () {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD82CPrSM7IkvOtcENua_o8TbtLgjxi7X8",
    authDomain: "makerstation-in-th.firebaseapp.com",
    databaseURL: "https://makerstation-in-th.firebaseio.com",
    projectId: "makerstation-in-th",
    storageBucket: "makerstation-in-th.appspot.com",
    messagingSenderId: "549808708652"
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