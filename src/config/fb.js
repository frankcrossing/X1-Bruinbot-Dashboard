
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAVSZZ6JWwBHEa6Ln1xTFscbw9mBHKQ27o",
  authDomain: "fair-myth-274206.firebaseapp.com",
  databaseURL: "https://fair-myth-274206.firebaseio.com",
  projectId: "fair-myth-274206",
  storageBucket: "fair-myth-274206.appspot.com",
  messagingSenderId: "279989064179",
  appId: "1:279989064179:web:e63b5367e635b5a6b0c286",
  measurementId: "G-X8Z33J05GZ"
}

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
