// Import the functions you need from the SDKs you need
//import { initializeApp} from "firebase-admin/app";
import { initializeApp } from 'firebase/app';
//import {getFirestore,getDocs,collection,addDoc,doc,setDoc,deleteDoc,onSnapshot} from "firebase/firestore"
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk_YscJWHNCfHzqNj8ImjB6C-TNUORJbQ",
  authDomain: "get-home-1.firebaseapp.com",
  databaseURL: "get-home-1-default-rtdb.firebaseio.com",
  projectId: "get-home-1",
  storageBucket: "get-home-1.appspot.com",
  messagingSenderId: "834790648522",
  appId: "1:834790648522:web:baefe759aafc19e6b26233",
  measurementId: "G-F9ZKWZB4W1"
};

// Initialize Firebasee
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

//initialize firestore 

//export const db = getFirestore(app);

/*
void readdata(){
  
  db.collection('Locations').get().then(snapshot=> {
    snapshot.foreach( doc => {
     console.log(doc.data());

    })
});
}
export async function getCollectionData(collectionName){
  const col = collection(db, collectionName);
  const colSnapshot = await getDocs(col);
  const colList = colSnapshot.docs.map(doc => doc.data());
  console.log(colList)
  return colList;
}
export  function liveFeed(collectionName,itemId){
  onSnapshot(doc(db,collectionName,itemId),(doc)=>{
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      console.log(source, " data: ", doc.data());
      return "MiMi"
  })
}
export function signOutUser(){
  const user = getAuth()
  signOut(user).then(()=> console.log("Sign Out Successfully")).catch(e=>console.log(e))
  // signOut()    
}*/
