import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC9V8o3vxwAxbZPfWwRCODil3ia4EcyI9c",
    authDomain: "test-easy-uat.firebaseapp.com",
    databaseURL: "https://test-easy-uat.firebaseio.com",
    projectId: "test-easy-uat",
    storageBucket: "test-easy-uat.appspot.com",
    messagingSenderId: "1089349484996"
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()