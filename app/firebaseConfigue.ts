import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZwhCzJzAwZrsWrhLgaAme2Me4rCucEWE",
  authDomain: "ccsit-sc.firebaseapp.com",
  projectId: "ccsit-sc",
  storageBucket: "ccsit-sc.appspot.com",
  messagingSenderId: "947204808895",
  appId: "1:947204808895:web:e4c83732d5cd2fd8a8260a",
  measurementId: "G-ZMDSQG42LB"
};


export const appConf = initializeApp(firebaseConfig);