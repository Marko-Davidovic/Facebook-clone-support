// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"

const firebaseConfig = {
	apiKey: "AIzaSyCi3gZm5fFchPK2mW8aDH7vhFUl7IYbuYY",
	authDomain: "facebook-clone-supports.firebaseapp.com",
	projectId: "facebook-clone-supports",
	storageBucket: "facebook-clone-supports.appspot.com",
	messagingSenderId: "153570255589",
	appId: "1:153570255589:web:3f3d5669c93c46ecb66a0c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;