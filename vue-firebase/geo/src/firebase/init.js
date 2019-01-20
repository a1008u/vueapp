import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAgMzoVSg-lsjel0NIgUQfjtwsPOi3lxzE",
  authDomain: "geoapp-b7469.firebaseapp.com",
  databaseURL: "https://geoapp-b7469.firebaseio.com",
  projectId: "geoapp-b7469",
  storageBucket: "",
  messagingSenderId: "275885344549"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();
