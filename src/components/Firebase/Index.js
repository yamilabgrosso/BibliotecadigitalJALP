import firebase from 'firebase/app'
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAi73AqOnoIHEbs9_6od_kiqqnmKAzE4uk",
    authDomain: "biblioteca-jalp.firebaseapp.com",
    projectId: "biblioteca-jalp",
    storageBucket: "biblioteca-jalp.appspot.com",
    messagingSenderId: "717549086723",
    appId: "1:717549086723:web:8e642281a87bd138cb8636",
    measurementId: "G-GTJC6N475Z"
}) 

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)

