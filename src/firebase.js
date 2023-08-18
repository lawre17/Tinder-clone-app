import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtynWs5QZYjmeHqTujFlAC9Jx4Ieu-AKU",
  authDomain: "tinderclone-9d35b.firebaseapp.com",
  projectId: "tinderclone-9d35b",
  storageBucket: "tinderclone-9d35b.appspot.com",
  messagingSenderId: "188656123005",
  appId: "1:188656123005:web:188e598d01d518f8dc8514",
  measurementId: "G-W76T0XHSHV"
};

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const database = getFirestore(app)

export default database