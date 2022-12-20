import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCZPulq18gH6wOL91wEQKNzx-zF1HuxF2A",
  authDomain: "olx-clone-17e0c.firebaseapp.com",
  projectId: "olx-clone-17e0c",
  storageBucket: "olx-clone-17e0c.appspot.com",
  messagingSenderId: "597506333242",
  appId: "1:597506333242:web:52816ce4779b8bbdb6f303",
  measurementId: "G-QZSHXGXM8J"
};

      export default firebase.initializeApp(firebaseConfig)

