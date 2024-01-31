import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwIe2W-KNhsGIqC2PFtKHEQEIZGHptT4U",
    authDomain: "loop-b9f0a.firebaseapp.com",
    projectId: "loop-b9f0a",
    storageBucket: "loop-b9f0a.appspot.com",
    messagingSenderId: "855551961660",
    appId: "1:855551961660:web:4935de5f83165ddf033139"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
