
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA9EJ58iQ_oKUHE23O064-ssqX2SG-H8C0",
    authDomain: "todolist-e428f.firebaseapp.com",
    databaseURL: "https://todolist-e428f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolist-e428f",
    storageBucket: "todolist-e428f.appspot.com",
    messagingSenderId: "834644176354",
    appId: "1:834644176354:web:45ec2587c40fff181e5dbb",
    measurementId: "G-TTMRCC6GHK"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase