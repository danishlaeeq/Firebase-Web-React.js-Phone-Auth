import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //v9

var firebaseConfig = {
    apiKey: "AIzaSyBIckT7JFNwwPUkrbe2y-qJySA2xbt-tdA",
    authDomain: "ustaad-2d151.firebaseapp.com",
    projectId: "ustaad-2d151",
    storageBucket: "ustaad-2d151.appspot.com",
    messagingSenderId: "60434284904",
    appId: "1:60434284904:web:83f7a79b618a2a5b5c56dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase