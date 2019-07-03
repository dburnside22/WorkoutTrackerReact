import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBzXCX8DFta6eci1TXhnAoqU_sC4KpN10E",
    authDomain: "workouttracker-e0563.firebaseapp.com",
    databaseURL: "https://workouttracker-e0563.firebaseio.com",
    projectId: "workouttracker-e0563",
    storageBucket: "",
    messagingSenderId: "995219898",
    appId: "1:995219898:web:3a75e95711311abf"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
