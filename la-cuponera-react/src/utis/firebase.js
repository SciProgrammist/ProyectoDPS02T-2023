import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import variables from './variables';

const firebaseConfig = {
    apiKey: variables.APIKEY,
    authDomain: variables.AUTHDOMAIN,
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();