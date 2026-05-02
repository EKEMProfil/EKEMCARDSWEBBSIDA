// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyAKYin1d8gILfkjaMzQsH3_3BWRNiowQrY",
  authDomain: "ekemcardswebbsida.firebaseapp.com",
  databaseURL: "https://ekemcardswebbsida-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ekemcardswebbsida",
  storageBucket: "ekemcardswebbsida.appspot.com",
  messagingSenderId: "322349001261",
  appId: "1:322349001261:web:168cce6becfed56682e6a4"
};

// Initiera Firebase
firebase.initializeApp(firebaseConfig);

// Initiera Realtime Database
const db = firebase.database();

// Globala states
let cards = {};
let orders = {};