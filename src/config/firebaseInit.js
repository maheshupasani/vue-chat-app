import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC6a9AkMWTryAea6yKjtlxx7SVglzCy30c",
    authDomain: "vue-chat-app-local.firebaseapp.com",
    databaseURL: "https://vue-chat-app-local.firebaseio.com",
    projectId: "vue-chat-app-local",
    storageBucket: "vue-chat-app-local.appspot.com",
    messagingSenderId: "607927922236",
    appId: "1:607927922236:web:d90bde7abb5c25aa769d39",
    measurementId: "G-ZNWTJJY9KB"
};
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();