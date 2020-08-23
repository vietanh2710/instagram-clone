import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsZbnOazKAA9c5pmtnyYFu3oL3EAN4D-U",
  authDomain: "instagram-clone-28d97.firebaseapp.com",
  databaseURL: "https://instagram-clone-28d97.firebaseio.com",
  projectId: "instagram-clone-28d97",
  storageBucket: "instagram-clone-28d97.appspot.com",
  messagingSenderId: "853581322665",
  appId: "1:853581322665:web:12b55d747100b871f90cb8",
  measurementId: "G-N4Q5B4CHR8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
