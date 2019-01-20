/**
 * firebase init
 */
import firebase from "firebase";

let config = {
  apiKey: "AIzaSyD8ZnE1HW04Fc_uY03qe4umw7R6xmpl2nI",
  authDomain: "lunch-5cec1.firebaseapp.com",
  databaseURL: "https://lunch-5cec1.firebaseio.com",
  projectId: "lunch-5cec1",
  storageBucket: "lunch-5cec1.appspot.com",
  messagingSenderId: "217777010581"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
