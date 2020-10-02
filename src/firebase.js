import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCIQ0T27WQVz7_VdHtrClVEA8EDW0eqPqI",
  authDomain: "abdu-ee14b.firebaseapp.com",
  databaseURL: "https://abdu-ee14b.firebaseio.com",
  projectId: "abdu-ee14b",
  storageBucket: "abdu-ee14b.appspot.com",
  messagingSenderId: "390544869353",
  appId: "1:390544869353:web:04292f674ba3f4cc906d78",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
