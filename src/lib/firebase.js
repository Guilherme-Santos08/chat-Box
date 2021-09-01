import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyD4blrRzIgoHKXboNw_TfV5Hzr1TIc-muU",
    authDomain: "chat-box-50682.firebaseapp.com",
    projectId: "chat-box-50682",
  });
}

export default firebase;
