import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBytlT86GGJtxY5Oq7qILpBjVluqBXdNfY",
    authDomain: "fir-25b3a.firebaseapp.com",
    projectId: "fir-25b3a",
    storageBucket: "fir-25b3a.appspot.com",
    messagingSenderId: "897750190397",
    appId: "1:897750190397:web:d5e43eedf20cb92a075d54",
    measurementId: "G-01JLNCNQJC"
  };


 export default firebase.initializeApp(firebaseConfig)