import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAKQIKcnOljSYElBhnKNfukZhbMpl53MF0",
    authDomain: "https://proyecto-dsp-2023-default-rtdb.firebaseio.com",
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();