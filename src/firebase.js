// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBt615sb1xdJzbKCtzP2Xr2mQyfR6JRSaI",
  authDomain: "facebook-clone-5a219.firebaseapp.com",
  databaseURL: "https://facebook-clone-5a219.firebaseio.com",
  projectId: "facebook-clone-5a219",
  storageBucket: "facebook-clone-5a219.appspot.com",
  messagingSenderId: "1084852566350",
  appId: "1:1084852566350:web:2fb37fe68af1307f9a061f",
  measurementId: "G-2KKBB52CFE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db;