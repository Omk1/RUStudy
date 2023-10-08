// firebase.js
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDkupE5QsdIgtPw8W5ZrA7ZrCYUbS9JZ4E",
    authDomain: "rustudy-4ebc5.firebaseapp.com",
    databaseURL: "https://rustudy-4ebc5-default-rtdb.firebaseio.com",
    projectId: "rustudy-4ebc5",
    storageBucket: "rustudy-4ebc5.appspot.com",
    messagingSenderId: "827503237791",
    appId: "1:827503237791:web:a966eaea1462d4cfe1a0aa"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);