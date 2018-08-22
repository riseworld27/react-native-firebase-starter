import * as homeActions from './home'
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDssZ37SH-DkPgx0m73ttDxxymaR34q-AA",
  authDomain: "mffp-3ca32.firebaseapp.com",
  databaseURL: "https://mffp-3ca32.firebaseio.com",
  projectId: "mffp-3ca32",
  storageBucket: "mffp-3ca32.appspot.com",
  messagingSenderId: "1091938356392"
});

export const ActionCreators = Object.assign({},
  homeActions
);