import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAvISpsQr47VhgOY-1twoenaN6m2Qch44E",
  authDomain: "react-e08b1.firebaseapp.com",
  projectId: "react-e08b1",
  storageBucket: "react-e08b1.appspot.com",
  messagingSenderId: "493122498869",
  appId: "1:493122498869:web:711f6ebae9cd7e315a1c7c",
  measurementId: "G-ZS7H9D9G54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
