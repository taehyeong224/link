import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHQQGjAE-okkrlN1k_fr6UhfyUPm1g-XQ",
    authDomain: "linkasef.firebaseapp.com",
    databaseURL: "https://linkasef.firebaseio.com",
    projectId: "linkasef",
    storageBucket: "linkasef.appspot.com",
    messagingSenderId: "214952151698",
    appId: "1:214952151698:web:451456d243c4c49d"
};

export const FB = firebase.initializeApp(firebaseConfig);