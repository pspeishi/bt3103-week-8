import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8IZhsizJopDEaKcDCQ60dFntTTHjnyaA",
    authDomain: "bt3103-week6-3a3a6.firebaseapp.com",
    projectId: "bt3103-week6-3a3a6",
    storageBucket: "bt3103-week6-3a3a6.appspot.com",
    messagingSenderId: "672753697608",
    appId: "1:672753697608:web:b4ee3d5f7f04458385e97d",
    measurementId: "G-V1LXXF83TW"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;