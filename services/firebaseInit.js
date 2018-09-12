// import firebase from "firebase";
import firebase, { storage } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyC9V8o3vxwAxbZPfWwRCODil3ia4EcyI9c",
  authDomain: "test-easy-uat.firebaseapp.com",
  databaseURL: "https://test-easy-uat.firebaseio.com",
  projectId: "test-easy-uat",
  storageBucket: "test-easy-uat.appspot.com",
  messagingSenderId: "1089349484996"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();
//const ste = firebase.storage();

firestore.settings({
  timestampsInSnapshots: true
});

export default firestore;
