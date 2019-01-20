import firebase from "firebase";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyBfym4SujkFXKxABL0u827dwTJeFKiBezc",
  authDomain: "smoothies-4ea34.firebaseapp.com",
  databaseURL: "https://smoothies-4ea34.firebaseio.com",
  projectId: "smoothies-4ea34",
  storageBucket: "smoothies-4ea34.appspot.com",
  messagingSenderId: "638071124973"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();
