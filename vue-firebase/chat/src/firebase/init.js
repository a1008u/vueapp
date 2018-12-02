import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDLAwuVeA6-z9muVE_Ko2wCDi3B4r1MCnE",
  authDomain: "chat-9a8ad.firebaseapp.com",
  databaseURL: "https://chat-9a8ad.firebaseio.com",
  projectId: "chat-9a8ad",
  storageBucket: "chat-9a8ad.appspot.com",
  messagingSenderId: "950427561505"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
