import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyD4blrRzIgoHKXboNw_TfV5Hzr1TIc-muU",
    authDomain: "chat-box-50682.firebaseapp.com",
    databaseURL: "https://chat-box-50682-default-rtdb.firebaseio.com",
    projectId: "chat-box-50682",
    storageBucket: "chat-box-50682.appspot.com",
    messagingSenderId: "412858819627",
    appId: "1:412858819627:web:e78a2eccdfd99e0d5fb66e",
  });
}

const auth = firebase.auth();
const database = firebase.database();

export { firebase, database, auth};
