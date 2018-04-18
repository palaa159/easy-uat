import firebase from 'firebase'

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

export {
  initFirebase,
}