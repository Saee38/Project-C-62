 import firebase from "firebase";
 const firebaseConfig= {
apiKey: "AIzaSyD5V3Ye-vVl38qRW381UpKsKMwN1V5vxjs",
  authDomain: "school-attendance-a5eb1.firebaseapp.com",
  databaseURL: "https://school-attendance-a5eb1-default-rtdb.firebaseio.com",
  projectId: "school-attendance-a5eb1",
  storageBucket: "school-attendance-a5eb1.appspot.com",
  messagingSenderId: "295670931844",
  appId: "1:295670931844:web:e2bb31ad031208346ebdd1"
//initialize your database
 }
 firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  