import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA-inp8mPOV6NKzb4nubxm9m8A67z9qMa4",
  authDomain: "netflix-9b568.firebaseapp.com",
  projectId: "netflix-9b568",
  storageBucket: "netflix-9b568.appspot.com",
  messagingSenderId: "234032496205",
  appId: "1:234032496205:web:a0e6356d022da31424e604", 
  measurementId: "G-0KJHL35L4K"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

