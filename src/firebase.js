import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBOFbAAwQL8Z2spiJda5h2aPsnkjCVDzPA",
  authDomain: "spartachat-98999.firebaseapp.com",
  projectId: "spartachat-98999",
  storageBucket: "spartachat-98999.appspot.com",
  messagingSenderId: "1090478040827",
  appId: "1:1090478040827:web:8372e35d4c12b4bb89f25e"
}).auth();

