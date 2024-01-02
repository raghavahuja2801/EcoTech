// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAoKvuLAUMjLGnUrrHwL1mYmFZScqEjXZ0",
    authDomain: "ecotech-70f20.firebaseapp.com",
    projectId: "ecotech-70f20",
    storageBucket: "ecotech-70f20.appspot.com",
    messagingSenderId: "110087646004",
    appId: "1:110087646004:web:7695ebdc47b13ef3dad361",
    measurementId: "G-MQWYXN85GD"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
