import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCHyiGkqgl24AgqM012-sb_7cR3hfBzvGA",
  authDomain: "my-app-95f33.firebaseapp.com",
  projectId: "my-app-95f33",
  storageBucket: "my-app-95f33.appspot.com",
  messagingSenderId: "218529801729",
  appId: "1:218529801729:web:1dcc436096b1d75c5a0200"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp
export {projectFirestore, projectAuth, timestamp, projectStorage }
