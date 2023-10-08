import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvf51GBBu5G0b9zd_58VJwMKV_Z_-S3tA",
    authDomain: "rustudy-da1c6.firebaseapp.com",
    databaseURL: "https://rustudy-da1c6-default-rtdb.firebaseio.com",
    projectId: "rustudy-da1c6",
    storageBucket: "rustudy-da1c6.appspot.com",
    messagingSenderId: "260205315237",
    appId: "1:260205315237:web:021e475b2d3ba7bffd794c",
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);