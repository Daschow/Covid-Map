// Initialize the FirebaseUI Widget using Firebase.
const config = {
  apiKey: "AIzaSyDss330-ZBxn1pdxSjxS_oHjDah4O1Ksrw",
  authDomain: "covid-proj-ae853.firebaseapp.com",
  databaseURL: "https://covid-proj-ae853.firebaseio.com",
  projectId: "covid-proj-ae853",
  storageBucket: "covid-proj-ae853.appspot.com",
  messagingSenderId: "250905634850",
  appId: "1:250905634850:web:d1d8069eddf6bee7d9c27b",
  measurementId: "G-2DP6ZZEVD3",
};
firebase.initializeApp(config);
let firestore = firebase.firestore();

const docRef = firestore.doc("users/fav");

const addFirebaseUser = (email, password) => {
  console.log("test")
  // Get a reference to the database service
  firebase.initializeApp(config);
  const database = firebase.database();
  database.ref("users/").set({
    email: email,
    password: password,
  });
};

const btnRegister = document.querySelector("#signup")

btnRegister.addEventListener("click", function () {
  console.log("bite")
  const textToSave = "username6";
  docRef.set({
    fav : textToSave
  }).then( function() {
    console.log("success");
  }).catch( function() {
    alert("FFFFFF");
  })
}, { merge: true })

const addfav = (lat, lng) => {
  docRef.collection("users").doc("fav").add({
    lat : lat,
    lng : lng
  }).then( function() {
    console.log("success");
  }).catch( function() {
    alert("FFFFFF");
  }), { merge: true };
};


