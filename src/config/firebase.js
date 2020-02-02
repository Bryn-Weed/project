import firebase, { database } from 'firebase';

const config = {
    apiKey: "AIzaSyDgxpPAMoh2YLLrdJDY5quaPsaqCtUkJ9c",
    authDomain: "project-collab-bb.firebaseapp.com",
    databaseURL: "https://project-collab-bb.firebaseio.com",
    projectId: "project-collab-bb",
    storageBucket: "project-collab-bb.appspot.com",
    messagingSenderId: "431691227066",
    appId: "1:431691227066:web:64cd800d39fca13f16c783",
    measurementId: "G-22S3C0141D"
};

const fire_base = firebase.initializeApp(config);
export default fire_base;